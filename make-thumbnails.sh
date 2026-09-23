#!/usr/bin/env bash
# サムネイル生成スクリプト (Mac / Linux, ImageMagick が必要)
# 使い方: リポジトリのルートで  bash make-thumbnails.sh
# ImageMagick 導入例:  brew install imagemagick   /   sudo apt install imagemagick
set -e
MAXW=640
QUALITY=72
for d in japan world; do
  SRC="assets/images/$d"
  OUT="assets/images/thumbs/$d"
  [ -d "$SRC" ] || { echo "skip: $SRC"; continue; }
  mkdir -p "$OUT"
  for f in "$SRC"/*.jpg "$SRC"/*.jpeg "$SRC"/*.png; do
    [ -e "$f" ] || continue
    name=$(basename "$f")
    magick "$f" -resize "${MAXW}>" -quality "$QUALITY" "$OUT/$name"
    echo "thumb: $name"
  done
done
echo "Done. thumbs saved under assets/images/thumbs/"