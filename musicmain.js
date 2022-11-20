let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".track-art");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
    {
        name: "Feel Special",
        artist: "TWICE",
        image: "pic/feels.jpg",
        path: "https://su-sycdn.kuwo.cn/658cae796759f4814d4cfbeeb0a9b9e5/6379d272/resource/n1/93/70/3843693700.mp3"
    },
    {
        name: "Lemon",
        artist: "米津玄师",
        image: "pic/lemon.jpg",
        path: "https://sc-sycdn.kuwo.cn/0aa4f96483000b2b548ff7d0dee345fc/6379d239/resource/n2/52/60/3401903182.mp3"
    },

    {
        name: "すずめ",
        artist: "十明",
        image: "pic/suzume.jpg",
        path: "https://lo-sycdn.kuwo.cn/24d210093c9dc2cb6753d41f4a8bc4e2/6379da82/resource/n3/49/98/3145297027.mp3"
    },
    {
        name: "ほころび",
        artist: "cover",
        image: "pic/hkrbi.jpg",
        path: "https://nc01-sycdn.kuwo.cn/0567d74b0fe42d38e4131c8ba7545943/6379d1f4/resource/n2/26/43/3130905223.mp3"
    },
    {
        name: "渡月橋~君想ふ~",
        artist: "倉木麻衣",
        image: "pic/kimiomo.jpg",
        path: "https://sf-sycdn.kuwo.cn/06108c00b2f040ec94d38d0887473274/6379e2bd/resource/n1/80/86/3104468332.mp3"
    },
    {
        name: "千と千尋",
        artist: "久石譲",
        image: "pic/sendosen.jpg",
        path: "http://m10.music.126.net/20221120164618/6b832a2e9f0426ae5cbdc4624e44b152/ymusic/d092/6700/f249/40af108cd3992782d44e680ed3678129.mp3"
    },
    {
        name: "いつも何度でも",
        artist: "千と",
        image: "pic/mooncloud.jpg",
        path: "http://m10.music.126.net/20221120165341/535219b30a886acb90c3a40ebba919d2/ymusic/ec93/f7c9/b1ab/be920377ac2a6e0b4be999ba91ebff99.mp3"
    },
    {
        name: "天空の城",
        artist: "久石譲",
        image: "pic/solar.jpg",
        path: "https://win-web-ri01-sycdn.kuwo.cn/c16ac1fe1f00a728c1cb492d6c1af2cc/6379d983/resource/n1/87/56/4272600974.mp3"
    },
    {
        name: "secret base",
        artist: "茅野愛衣",
        image: "pic/secret.jpg",
        path: "https://cj-sycdn.kuwo.cn/129a6736e382ea3be34a9f50180a398a/6379dbd9/resource/n3/48/77/3545213556.mp3"
    },
    {
        name: "senorita",
        artist: "Shawn",
        image: "http://p4.music.126.net/B3IUMOV0-TLyEaGgifSysw==/109951164529637213.jpg?param=300x300",
        path: "https://lq-sycdn.kuwo.cn/42830ccd1882c1fd8f9ef776c469d552/6379de93/resource/n3/76/48/2605344997.mp3"
    },
];

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();

    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = 
        "PLAYING" + (track_index + 1) + "OF" + track_list.length;

    updateTimer = setInterval(seekUpdate, 1000);

    curr_track.addEventListener("ended", nextTrack);
    
    random_bg_color();

}

function random_bg_color() {

    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.body.style.background = bgColor;
}

function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack() {

    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    
    curr_track.play();
    isPlaying = true;

    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {

    curr_track.pause();
    isPlaying = false;

    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    
    if(track_index<track_list.length - 1)
        track_index += 1;
    else track_index = 0;

    loadTrack(track_index);
    playTrack();
}

function prevTrack() {

    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length - 1;

    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    
    seekto = curr_track.duration * (seek_slider.value / 100);

    curr_track.currentTime = seekto;
}

function setVolume() {

    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if(!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 /curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration -durationMinutes * 60);

        if(currentSeconds < 10) { currentSeconds = "0" + currentSeconds;}
        if(durationSeconds < 10) {durationSeconds = "0" + durationSeconds;}
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes;}
        if(durationMinutes < 10) {durationMinutes = "0" + durationMinutes;}

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

loadTrack(track_index);