let fs = require('fs');
const dirAudio = '/home/arturas/Downloads/audio/cp';
const dirMusic = '/home/arturas/Downloads/music';
const dirPlaylist = '/home/arturas/Downloads/audio/playlist';

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

let filesAudio = fs.readdirSync(dirAudio);
let filesMusic = fs.readdirSync(dirMusic);

let ctx = 0;
for ( let i = 0; i < filesAudio.length; i++ )
{
    const audioIdx = i;
    const musicIdx = audioIdx % filesMusic.length;

    const fileAudio = filesAudio[audioIdx];
    const fileMusic = filesMusic[musicIdx];

    const audioCtx = construct_BeginningOfTheFile(ctx++);
    copyFile(`${dirAudio}/${fileAudio}`, `${dirPlaylist}/${audioCtx}_${fileAudio}`);


    const musicCtx = construct_BeginningOfTheFile(ctx++);
    copyFile(`${dirMusic}/${fileMusic}`, `${dirPlaylist}/${musicCtx}_${fileMusic}`);
}

function copyFile(src, dest) {

    let readStream = fs.createReadStream(src);

    readStream.once('error', (err) => {
        console.log(err);
    });

    readStream.once('end', () => {
        console.log('done copying');
    });

    readStream.pipe(fs.createWriteStream(dest));
}