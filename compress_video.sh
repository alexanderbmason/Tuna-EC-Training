#!/bin/bash
# Compress video script
# Install ffmpeg first: brew install ffmpeg

echo "Compressing video..."
ffmpeg -i public/tunaoh.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -preset slow \
  -vf "scale=1280:-2" \
  -acodec aac \
  -b:a 128k \
  -movflags +faststart \
  public/tunaoh_compressed.mp4

echo "Original size:"
ls -lh public/tunaoh.mp4
echo "Compressed size:"
ls -lh public/tunaoh_compressed.mp4
