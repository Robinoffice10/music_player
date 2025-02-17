let songs = [
    {
        title: "Paparazzi",
        image: "assets/Patandar.jpg",
        song: "assets/paparazzi.mp3"
    },
    {
        title: "Opinion",
        image: "assets/manifest.webp",
        song: "assets/Opinion.mp3"
    },
    {
        title: "Score",
        image: "assets/awara.jpg",
        song: "assets/Score.mp3"
    },
    {
        title: "Never Ever",
        image: "assets/Patandar.jpg",
        song: "assets/never_ever.mp3"
    },
    {
        title: "Woah",
        image: "assets/Chobar.jpg",
        song: "assets/Woah.mp3"
    },
    {
        title: "Calculations",
        image: "assets/Saroor.jpg",
        song: "assets/Calculations.mp3"
    },
    {
        title: "Munde Pindan De",
        image: "assets/Jalwa.jpg",
        song: "assets/Munde Pindan De.mp3"
    },
    {
        title: "Panjabi",
        image: "assets/Saroor.jpg",
        song: "assets/Panjabi.mp3"
    },
    {
        title: "Youth Flow",
        image: "assets/Chobar.jpg",
        song: "assets/Youth_Flow .mp3"
    },
];



let title = document.querySelector("#title");
let songDesc = document.querySelector("#songlist");
let ImageTag = document.getElementById("img");
//Button Part
let playbtn = document.getElementById("play");
let forwardbtn = document.getElementById("forward");
let reversebtn = document.getElementById("reverse");
let audio = document.getElementById("audio");
let progress_container = document.getElementById("progress-container");
let progress = document.getElementById("progress");
let audio_current_time = document.getElementById("audio_current_time");
let audio_duration = document.getElementById("audio_duration");
let shuffle_btn = document.getElementById("shuffle");
let repeat_btn = document.getElementById("repeat");
let isShuffle = false;
let isRepeatAll = false
let originalSongs = [...songs];

//Song Time

let audioDu = '00:00', audioCT = '00:00';
audio.addEventListener('loadedmetadata', () => {
    audioDu = audio.duration;
    let mint = parseInt((parseInt(audioDu / 60)) / 10) == 0 ? '0' + parseInt(audioDu / 60) : parseInt(audioDu / 60);
    let sec = parseInt((parseInt(audioDu % 60)) / 10) == 0 ? parseInt(audioDu % 60) + '0' : parseInt(audioDu % 60);
    audio_duration.innerHTML = mint + ':' + sec;
})

audio.addEventListener('timeupdate', () => {
    audioCT = audio.currentTime;
    let CTmint = parseInt((parseInt(audioCT / 60)) / 10) == 0 ? '0' + parseInt(audioCT / 60) : parseInt(audioCT / 60);
    let CTsec = parseInt((parseInt(audioCT % 60)) / 10) == 0 ? '0' + parseInt(audioCT % 60) : parseInt(audioCT % 60);
    audio_current_time.innerText = CTmint + ":" + CTsec;
    progress.style.width = progress + '%';
    const progressPercent = (audioCT / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
})

// Allow clicking on the progress bar to seek


progress.parentElement.addEventListener('click', function (e) {
    const progressWidth = progress.parentElement.offsetWidth;
    const clickPosition = e.offsetX;
    const newTime = (clickPosition / progressWidth) * audio.duration;
    audio.currentTime = newTime;
});


// playbtn
let position = 0;
function updateSongDetails(position) {
    audio.setAttribute('src', songs[position].song)
    songDesc.innerHTML = `${position + 1}/${songs.length}`;
    ImageTag.src = songs[position].image;
    title.innerHTML = songs[position].title;
}
updateSongDetails(position)

function playAudio() {
    if (playbtn.classList.contains('bi-play-circle-fill')) {
        playbtn.classList.remove('bi-play-circle-fill')
        playbtn.classList.add('bi-pause-circle-fill')
        audio.play()

    } else {
        playbtn.classList.remove('bi-pause-circle-fill')
        playbtn.classList.add('bi-play-circle-fill')
        audio.pause()
    }
}
playbtn.addEventListener('click', playAudio)


//forward btn System
forwardbtn.addEventListener('click', () => {
    if (songs.length <= position + 1) {
        position = 0;
    } else {
        position++;
    }
    updateSongDetails(position);
    playbtn.classList.remove('bi-play-circle-fill')
    playbtn.classList.add('bi-pause-circle-fill')
    audio.play()
});

//reverse btn System
reversebtn.addEventListener('click', () => {
    if (position == 0) {
        position = songs.length - 1;
    } else {
        position--;
    }
    updateSongDetails(position);
    playbtn.classList.remove('bi-play-circle-fill')
    playbtn.classList.add('bi-pause-circle-fill')
    audio.play()
});



// Repeat button functionality
let repeatBtnFlag = 'NO'; // Default is No Repeat
repeat_btn.addEventListener('click', () => {
    if (repeatBtnFlag === 'NO') {
        // No Repeat: Just set the class for no repeat (initial state)
        repeat_btn.classList.remove('bi-repeat-1');
        repeat_btn.classList.add('bi-repeat');  
        repeatBtnFlag = 'ONE';  
        repeat_btn.style.color = "";  
    } else if (repeatBtnFlag === 'ONE') {
        // Repeat One: Switch to Repeat All
        repeat_btn.classList.remove('bi-repeat');
        repeat_btn.classList.add('bi-repeat-1');  
        repeatBtnFlag = 'ALL';  
        audio.loop = false;     
        repeat_btn.style.color = "";  
    } else {
        // Repeat All: Change color to blue and set loop to all songs
        repeat_btn.classList.remove('bi-repeat-1');
        repeat_btn.classList.add('bi-repeat');  
        repeatBtnFlag = 'NO'; 
        audio.loop = true;    
        repeat_btn.style.color = "#0000ff";  
    }
});

// Song ended event handler
audio.addEventListener('ended', () => {
    if (repeatBtnFlag === 'ALL') {
        position = (position + 1) % songs.length;
        updateSongDetails(position);
        audio.play(); 
    } else if (repeatBtnFlag === 'ONE') {
        audio.play(); 
    } else {
        
    }
});

// Function to shuffle the songs array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Function to play a random song after shuffle
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    position = randomIndex; 
    updateSongDetails(position);
    audio.play(); 
}

shuffle_btn.addEventListener('click', function () {
    shuffleArray(songs);
    playRandomSong(); 
    this.classList.toggle('skyblue');
});

