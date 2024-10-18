let songs = [
    {
        h2: "Opinion",
        image: "assets/manifest.webp",
        song: "assets/Opinion.mp3"
    },
    {
        h2: "Score",
        image: "assets/awara.jpg",
        song: "assets/Score.mp3"
    },
    {
        h2: "Woah",
        image: "assets/Chobar.jpg",
        song: "assets/Woah.mp3"
    },
    {
        h2: "Calculations",
        image: "assets/Saroor.jpg",
        song: "assets/Calculations.mp3"
    },
    {
        h2: "Munde Pindan De",
        image: "assets/Jalwa.jpg",
        song: "assets/Munde Pindan De.mp3"
    },
    {
        h2: "Panjabi",
        image: "assets/Saroor.jpg",
        song: "assets/Panjabi.mp3"
    },
    {
        h2: "Youth Flow",
        image: "assets/Chobar.jpg",
        song: "assets/Youth_Flow .mp3"
    },
];



let h2 = document.querySelector("#title");
let ImageTag = document.getElementById("img");
let songLength = document.querySelector('.songlist');

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
let repeat_all_btn = document.getElementById("repeat_all");

let isShuffle = false;
let isRepeatAll = false
let originalSongs = [...songs];


function updateSongDetails() {
    songName.innerHTML = songs[position].title;
    songDesc.innerHTML = songs[position].genre;
    songImg.src = songs[pos].img;
    audio.src = songs[pos].src;
}

//Play Function
audio.setAttribute('src', songs[0].song)
ImageTag.src = songs[0].image;
h2.innerHTML = songs[0].h2;
isPlaying = 0;

// playbtn
let position =0;

function play() {
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
playbtn.addEventListener('click', play)




//forward btn System
forwardbtn.addEventListener('click', () => {
    if (songs.length <= position + 1) {
        position = 0;
    } else {
        position++;
    }
    audio.src = songs[position].song;
    ImageTag.src = songs[position].image;
    h2.innerHTML = songs[position].h2;

    // songLength 
    songLength.innerHTML = (position + 1) + "/" + songs.length;

    audio.play();
});

//reverse btn System
reversebtn.addEventListener('click', () => {
    if (position == 0) {
        position = songs.length - 1;
    } else {
        position--;
    }
    audio.src = songs[position].song;
    ImageTag.src = songs[position].image;
    h2.innerHTML = songs[position].h2;

    // songLength 
    songLength.innerHTML = (position + 1) + "/" + songs.length;

    audio.play();

});


// progress bar



// let updateProgress = () => {
//     let { duration, currentTime } = audio;
//     let progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;
//     audio_current_time.innerHTML = sToTime(currentTime);
//     audio_duration.innerHTML = isNaN(duration) ? "00:00" : sToTime(duration);
//   };
  
//   let setProgress = (e) => {
//     let width = progress_container.clientWidth;
//     let clickX = e.offsetX;
//     let duration = audio.duration;
//     audio.currentTime = (clickX / width) * duration;
//   };
  
//   function sToTime(t) {

// updateSongDetails();
// audio.addEventListener("timeupdate", updateProgress);
// shuffle_btn.addEventListener("click", shuffle);
// progress_container.addEventListener("click", setProgress);
// audio.addEventListener("ended", next);
// audio_pause_btn.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.play();
//     audio_pause_btn.children[0].className = "bi bi-pause-fill";
//   } else {
//     audio.pause();
//     audio_pause_btn.children[0].className = "bi bi-play-fill";
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   audio.play();
// });
//     return padZero(parseInt((t / 60) % 60)) + ":" + padZero(parseInt(t % 60));
//   }
  
//   function padZero(v) {
//     return v < 10 ? "0" + v : v;
//   }


//   shuffle btn


// let shuffle = () => {
//     if (!isShuffle) {
//       shuffle_btn.childNodes[0].classList.add("text-primary");
//       shuffleSongs(songs); 
//       isShuffle = true;
//     } else {
//       shuffle_btn.childNodes[0].classList.remove("text-primary");
//       songs = [...originalSongs]; 
//       isShuffle = false;
//     }
//     pos = 0;
//     updateSongDetails();
//     audio.play();
//     audio_pause_btn.children[0].className = "bi bi-pause-fill";
//   };


//   repeat btn



// let repeatAll = () => {
//     if (!isRepeatAll) {
//       repeat_all_btn.childNodes[0].classList.add("text-primary");
//       isRepeatAll = true;
//       audio.play();
//       audio_pause_btn.children[0].className = "bi bi-pause-fill";
//       audio.addEventListener("ended", next);
//     } else {
//       repeat_all_btn.childNodes[0].classList.remove("text-primary");
//       isRepeatAll = false;
//       audio.addEventListener("ended", ()=>{
//         audio.pause();
//         audio_pause_btn.children[0].className = "bi bi-play-fill";
//       })
//     } 
//   };




// audio.addEventListener("timeupadte", () => {
//     let { duration, currentTime } = audio;
//     console.log(duration, currentTime);
// });





// updateSongDetails();
// audio.addEventListener("timeupdate", updateProgress);
// shuffle_btn.addEventListener("click", shuffle);
// progress_container.addEventListener("click", setProgress);
// audio.addEventListener("ended", next);
// audio_pause_btn.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.play();
//     audio_pause_btn.children[0].className = "bi bi-pause-fill";
//   } else {
//     audio.pause();
//     audio_pause_btn.children[0].className = "bi bi-play-fill";
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   audio.play();
// });