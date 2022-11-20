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
        path: "https://su-sycdn.kuwo.cn/40ea0500963c37336bfffdfe1c0fbfe0/6379e63a/resource/n1/93/70/3843693700.mp3",
    },
    {
        name: "Lemon",
        artist: "米津玄师",
        image: "pic/lemon.jpg",
        path: "https://sc-sycdn.kuwo.cn/de7a8cf267c245b3f628b73ff814e0dd/6379e667/resource/n2/52/60/3401903182.mp3",
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
        path: "https://nc01-sycdn.kuwo.cn/b4ff4bdf3cce8815e77f2ecfa1ea3116/6379e72e/resource/n2/26/43/3130905223.mp3"
    },
    {
        name: " Let It Go",
        artist: "Loni Lovato ",
        image: "http://p4.music.126.net/uCAsEfgVE_JFmxjwpS_BIg==/109951163400590084.jpg?param=300x300",
        path: "http://m10.music.126.net/20221120170612/b2db5b98f0750a5652668f47914afdcd/ymusic/cec8/288b/2067/e0c9f14cc7901aaccfbe8277e2ebcef2.mp3"
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