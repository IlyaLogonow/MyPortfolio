const songs = [
{
    name: "Perfect",
    link: "https://www.dropbox.com/pri/get/Home%20Resonance.mp3?_subject_uid=2011496881&w=AABuguddDzkVZwnTl6vwCaFL8YAyFvByG5WcuHSaHFVjZQ",
    artists: "Ed Sheeran",
    image: "https://media.giphy.com/media/Id5boIMCwXxbnduKcT/giphy.gif"
},
{
    name: "7 Rings",
    link: "https://www.dropbox.com/pri/get/the%20weeknd%20-%20save%20your%20tears%20%5Bslowed%20&%20reverb%5D%20%28audio-extractor.net%29.mp3?_subject_uid=2011496881&w=AACWdLspTlYD6QySc_37AuuHG2ymFTojtlJdCukhBxENUQ",
    artists: "Ariana Grande",
    image: "https://media.giphy.com/media/dApODKgn3zhJSMz32C/giphy.gif"
},
{
    name: "Happier",
    link: "https://www.dropbox.com/s/zp1xfir101y4sc3/happier.mp3?raw=1",
    artists: "Marshmello",
    image: "https://media.giphy.com/media/XeXkvewCclRpSPYerO/giphy.gif"
},
{
    name: "Stay",
    link: "https://www.dropbox.com/s/umam9olakop001d/stay.mp3?raw=1",
    artists: "Justin Bieber",
    image: "https://media.giphy.com/media/jVBfscMXbbb5nAFjQW/giphy.gif"
},
{
    name: "Girls Like You",
    link: "https://www.dropbox.com/s/yi1cpg16snrl3fc/girls-like-you.mp3?raw=1",
    artists: "Maroon 5",
    image: "https://media.giphy.com/media/WoR3wMdCAHd2r8y19d/giphy.gif"
}
];

var progress = document.querySelector("#progress");
var song = document.querySelector("#song");
var playBtn = document.querySelector("#play i");
var index = 0;
var img = document.querySelector(".img img");

var title = document.querySelector("#title");
var thumb = document.querySelector("#thumb");
var artist = document.querySelector("#musician");

var start = document.querySelector("#start");
var end = document.querySelector("#end");

song.src = songs[index].link;

title.innerHTML = songs[index].name;
artist.innerHTML = songs[index].artists;
thumb.src = songs[index].image;

song.onloadedmetadata = function () {
progress.max = song.duration;
progress.value = song.currentTime;

setInterval(() => {
    var min = Math.floor(song.duration / 60);
    var sec = Math.floor(song.duration % 60);

    var curMin = Math.floor(song.currentTime / 60);
    var curSec = Math.floor(song.currentTime % 60);

    if (sec < 10) {
    sec = "0" + sec;
    }
    if (curSec < 10) {
    curSec = "0" + curSec;
    }
    if (min < 10) {
    min = "0" + min;
    }
    if (curMin < 10) {
    curMin = "0" + curMin;
    }

    end.innerHTML = min + ":" + sec;
    start.innerHTML = curMin + ":" + curSec;
}, 1000);
};

function playPause() {
if (playBtn.classList.contains("bx-pause")) {
    song.pause();
    playBtn.classList.remove("bx-pause");
    playBtn.classList.add("bx-play");
    img.classList.remove("play");
} else {
    song.play();
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
    img.classList.add("play");
}
}

if (song.play()) {
setInterval(() => {
    progress.value = song.currentTime;
    if (song.currentTime == song.duration) {
    nextPlay();
    }
}, 1000);
}

progress.onchange = function () {
song.play();
song.currentTime = progress.value;
playBtn.classList.remove("bx-play");
playBtn.classList.add("bx-pause");
img.classList.add("play");
};

function nextPlay() {
index = index + 1;
if (index > songs.length) {
    index = 0;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
} else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
}
}

function prevPlay() {
index = index - 1;
if (index < 0) {
    index = songs.length;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
} else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
}
}
  