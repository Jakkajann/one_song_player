let isPlaying = false
let currentPlaying = {
    button: null,
    audio: null,
    song: null
}

const progress = $("#musicProgress");

let interval = null;

function updateBar() {
    $(progress).css("width", currentPlaying.audio.currentTime);
}


function playSong(element) {
    const song = $(element).attr("song");
    var audio = new Audio(song);
    audio.volume = 0.4;
    const duration = audio.duration;
    $(".progress").attr("aria-value-max", audio.duration);

    if (song === currentPlaying.song && isPlaying) {
        currentPlaying.audio.pause();
        clearInterval(interval);
        $(element).text("Play");
        $(element).removeClass("btn-danger");
        $(element).addClass("btn-success");
        isPlaying = !isPlaying;
    } else if(song === currentPlaying.song && !isPlaying){
        $(element).removeClass("btn-success");
        $(element).addClass("btn-danger");
        $(element).text("Pause")
        currentPlaying.audio.play();
        interval = setInterval(updateBar, 1000);
        isPlaying = !isPlaying;
    } else {
        if(currentPlaying.audio)
            currentPlaying.audio.pause();
        audio.play();
        currentPlaying.audio = audio;
        currentPlaying.audio.play();
        $(element).removeClass("btn-success");
        $(element).addClass("btn-danger");
        $(element).text("Pause")
        currentPlaying.button = element;
        currentPlaying.song = song;
        isPlaying = !isPlaying;
        interval = setInterval(updateBar, 1000);
     }
}