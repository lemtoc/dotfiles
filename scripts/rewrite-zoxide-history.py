#!/usr/bin/env python3
"""Rewrite zoxide's history database in place.

Use cases:
  - Your macOS short name changed (e.g. mfyuu -> t1190078) and zoxide
    still has the old /Users/<old>/... paths cached.
  - You want to consolidate duplicate entries that point at the same
    logical directory under different prefixes.

What it does:
  1. Reads ~/Library/Application Support/zoxide/db.zo (or $_ZO_DATA_DIR)
  2. Rewrites every path that starts with any --from prefix to use the
     --to prefix instead.
  3. Merges entries that collide after rewrite (max rank, latest ts).
  4. Optionally drops entries whose target directory no longer exists.
  5. Writes a timestamped backup, then atomically replaces the db.

The db.zo binary format (version 3) is:
  u32 LE   version
  u64 LE   count
  count * {
    u64 LE  path_len
    bytes   path_len utf-8
    f64 LE  rank
    u64 LE  last_accessed (unix seconds)
  }
"""
from __future__ import annotations

import argparse
import os
import shutil
import struct
import sys
import time
from pathlib import Path

SUPPORTED_VERSION = 3


def db_path() -> Path:
    env = os.environ.get("_ZO_DATA_DIR")
    if env:
        return Path(env) / "db.zo"
    if sys.platform == "darwin":
        return Path.home() / "Library/Application Support/zoxide/db.zo"
    xdg = os.environ.get("XDG_DATA_HOME") or str(Path.home() / ".local/share")
    return Path(xdg) / "zoxide/db.zo"


def parse(buf: bytes) -> tuple[int, list[tuple[str, float, int]]]:
    pos = 0
    version = struct.unpack_from("<I", buf, pos)[0]
    pos += 4
    if version != SUPPORTED_VERSION:
        print(
            f"warn: db version {version} is not the tested version "
            f"({SUPPORTED_VERSION}); proceed at your own risk",
            file=sys.stderr,
        )
    count = struct.unpack_from("<Q", buf, pos)[0]
    pos += 8
    rows: list[tuple[str, float, int]] = []
    for _ in range(count):
        n = struct.unpack_from("<Q", buf, pos)[0]
        pos += 8
        path = buf[pos:pos + n].decode("utf-8")
        pos += n
        rank = struct.unpack_from("<d", buf, pos)[0]
        pos += 8
        ts = struct.unpack_from("<Q", buf, pos)[0]
        pos += 8
        rows.append((path, rank, ts))
    if pos != len(buf):
        print(f"warn: {len(buf) - pos} trailing byte(s) ignored", file=sys.stderr)
    return version, rows


def serialize(version: int, rows: list[tuple[str, float, int]]) -> bytes:
    out = bytearray()
    out += struct.pack("<I", version)
    out += struct.pack("<Q", len(rows))
    for path, rank, ts in rows:
        path_bytes = path.encode("utf-8")
        out += struct.pack("<Q", len(path_bytes))
        out += path_bytes
        out += struct.pack("<d", rank)
        out += struct.pack("<Q", ts)
    return bytes(out)


def remap(path: str, mappings: list[tuple[str, str]]) -> str:
    for old, new in mappings:
        if path.startswith(old):
            return new + path[len(old):]
    return path


def merge(
    rows: list[tuple[str, float, int]],
    mappings: list[tuple[str, str]],
    strategy: str,
) -> dict[str, tuple[float, int]]:
    merged: dict[str, tuple[float, int]] = {}
    for path, rank, ts in rows:
        new_path = remap(path, mappings)
        if new_path in merged:
            old_rank, old_ts = merged[new_path]
            if strategy == "max":
                merged[new_path] = (max(old_rank, rank), max(old_ts, ts))
            elif strategy == "sum":
                merged[new_path] = (old_rank + rank, max(old_ts, ts))
            else:
                raise ValueError(f"unknown strategy: {strategy}")
        else:
            merged[new_path] = (rank, ts)
    return merged


def parse_mappings(items: list[str]) -> list[tuple[str, str]]:
    pairs: list[tuple[str, str]] = []
    for item in items:
        if "=" not in item:
            raise SystemExit(f"--map expects OLD=NEW (got {item!r})")
        old, _, new = item.partition("=")
        if not old or not new:
            raise SystemExit(f"--map expects non-empty OLD and NEW (got {item!r})")
        pairs.append((old, new))
    return pairs


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument(
        "--map",
        action="append",
        required=True,
        metavar="OLD=NEW",
        help="prefix replacement; repeatable. e.g. /Users/mfyuu/=/Users/t1190078/",
    )
    parser.add_argument(
        "--db",
        type=Path,
        default=db_path(),
        help="path to db.zo (default: platform-specific zoxide data dir)",
    )
    parser.add_argument(
        "--strategy",
        choices=("max", "sum"),
        default="max",
        help="how to merge ranks when paths collide after remap (default: max)",
    )
    parser.add_argument(
        "--drop-missing",
        action="store_true",
        help="drop entries whose target directory does not exist on disk",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="print summary without writing anything",
    )
    parser.add_argument(
        "--no-backup",
        action="store_true",
        help="skip writing db.zo.bak-<timestamp> next to the db",
    )
    args = parser.parse_args()

    mappings = parse_mappings(args.map)
    if not args.db.exists():
        print(f"error: db not found: {args.db}", file=sys.stderr)
        return 1

    buf = args.db.read_bytes()
    version, rows = parse(buf)
    print(f"db: {args.db}", file=sys.stderr)
    print(f"version={version} entries={len(rows)}", file=sys.stderr)

    merged = merge(rows, mappings, args.strategy)
    dup_dropped = len(rows) - len(merged)

    items = list(merged.items())
    if args.drop_missing:
        kept = [(p, r, t) for p, (r, t) in items if os.path.isdir(p)]
    else:
        kept = [(p, r, t) for p, (r, t) in items]
    missing_dropped = len(items) - len(kept)

    print(f"after remap+dedup ({args.strategy}): {len(merged)} (-{dup_dropped} duplicates)", file=sys.stderr)
    if args.drop_missing:
        print(f"after exists filter: {len(kept)} (-{missing_dropped} missing dirs)", file=sys.stderr)

    if args.dry_run:
        print("(dry-run: not writing)", file=sys.stderr)
        return 0

    if not args.no_backup:
        backup = args.db.with_name(f"{args.db.name}.bak-{time.strftime('%Y%m%d-%H%M%S')}")
        shutil.copy2(args.db, backup)
        print(f"backup: {backup}", file=sys.stderr)

    tmp = args.db.with_suffix(args.db.suffix + ".tmp")
    tmp.write_bytes(serialize(version, kept))
    os.replace(tmp, args.db)
    print(f"wrote {args.db} ({len(kept)} entries)", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
