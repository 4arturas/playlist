let fs = require('fs');
const dirAudio = '/home/arturas/Downloads/audio';

let filesAudio = fs.readdirSync(dirAudio);
for ( let i = 0; i < filesAudio.length; i++ )
{
    const fileName = filesAudio[i];
    const counter = construct_BeginningOfTheFile(i);
    const cmd = `ffmpeg -i "${dirAudio}/${fileName}" -f segment -segment_time 180 -c copy ${dirAudio}/cp/${counter}%03d${fileName.replaceAll(' ', '')}`;
    console.log(cmd);
}

function construct_BeginningOfTheFile(num) {
    const len = String(num).length;
    if ( len === 1 )
        return `0000${num}`;
    if ( len === 2 )
        return `000${num}`;
    if ( len === 3 )
        return `00${num}`;
    if ( len === 4 )
        return `0${num}`;
    if ( len === 5 )
        return `${num}`;
}