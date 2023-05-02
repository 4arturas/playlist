```sh
for f in *.mp4;do ffmpeg -i "${f}" -ab 320k -map_metadata 0 -id3v2_version 3 "${f%.*}".mp3;done;
for f in *.mp3;do ffmpeg -i "${f}" -f segment -segment_time 60 -c copy ${%03f%.*}.mp3;done;
````

```sh
ffmpeg -i kant.mp4 kant.mp3
````

```sh
ffmpeg -i "music.mp3" -f segment -segment_time 60 -c copy %03dmusic.mp3
````

```sh
for f in *.mp3;do ffmpeg -i "music.mp3" -f segment -segment_time 60 -c copy %03dmusic.mp3;done;
````
