let isPlaying = false
let currentPlaying = {
    button: null,
    audio: null,
    song: null
}

function playSong(element) {
    const song = $(element).attr("song");
    var audio = new Audio(song);
    audio.volume = 0.4;

    if (song === currentPlaying.song && isPlaying) {
        currentPlaying.audio.pause();
        isPlaying = !isPlaying;
    } else if(song === currentPlaying.song && !isPlaying){
        currentPlaying.audio.play();
        isPlaying = !isPlaying;
    } else {
        if(currentPlaying.audio)
            currentPlaying.audio.pause();
        audio.play();
        currentPlaying.audio = audio;
        currentPlaying.audio.play();
        currentPlaying.button = element;
        currentPlaying.song = song;
        isPlaying = !isPlaying;
     }
}