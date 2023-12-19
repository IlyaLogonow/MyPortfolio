const songs = [
{
    name: "X",
    link: "https://www.dropbox.com/pri/get/Home%20Resonance.mp3?_subject_uid=2011496881&w=AABuguddDzkVZwnTl6vwCaFL8YAyFvByG5WcuHSaHFVjZQ",
    artists: "X",
    image: "https://media.giphy.com/media/Id5boIMCwXxbnduKcT/giphy.gif"
},
{
    name: "X",
    link: "https://www.dropbox.com/pri/get/the%20weeknd%20-%20save%20your%20tears%20%5Bslowed%20&%20reverb%5D%20%28audio-extractor.net%29.mp3?_subject_uid=2011496881&w=AACWdLspTlYD6QySc_37AuuHG2ymFTojtlJdCukhBxENUQ",
    artists: "X",
    image: "https://media.giphy.com/media/dApODKgn3zhJSMz32C/giphy.gif"
},
{
    name: "X",
    link: "https://www.dropbox.com/pri/get/V%C3%98J,Narvent%20-%20Memory%20Reboot.mp3?_subject_uid=2011496881&w=AACu6MaKt3JEv9Wcq7UuJNd9MSkgLhehGQxntpK0KnBM2w",
    artists: "X",
    image: "https://media.giphy.com/media/XeXkvewCclRpSPYerO/giphy.gif"
},
{
    name: "X",
    link: "https://www.dropbox.com/pri/get/Mr.%20Kitty%20-%20After%20Dark.mp3?_subject_uid=2011496881&w=AADjA_IwOEADPqYaHuH6wgl4jgvHeJYa2gnkjYxIG_5VhQ",
    artists: "X",
    image: "https://media.giphy.com/media/jVBfscMXbbb5nAFjQW/giphy.gif"
},
{
    name: "X",
    link: "https://www.dropbox.com/pri/get/College%20-%20A%20Real%20Hero%20%28OST%20%D0%94%D1%80%D0%B0%D0%B9%D0%B2%29.mp3?_subject_uid=2011496881&w=AABkaq2mVS0xPxJYS6w4N1vonn_WGTWutvvwzxqVJkOdaA",
    artists: "X",
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
  