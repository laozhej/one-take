#!/bin/zsh
# Frame count, duration, colour tags, and the first/last frames of an MP4 for a loop check.
f="$1"; out="${2:-/tmp}"
ffprobe -v error -count_frames -select_streams v:0 -show_entries stream=nb_read_frames,width,height,r_frame_rate,pix_fmt,color_range,color_space,color_primaries,color_transfer -of compact "$f"
ffprobe -v error -show_entries format=duration:stream=codec_name,duration -of compact "$f"
ffmpeg -v error -y -i "$f" -vf "select=eq(n\,0)" -frames:v 1 "$out/first.png"
ffmpeg -v error -y -sseof -0.1 -i "$f" -update 1 -frames:v 3 "$out/last.png"
