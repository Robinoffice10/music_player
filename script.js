let songs = [
    {
<<<<<<< HEAD
        title: "Paparazzi",
        image: "assets/Patandar.jpg",
        song: "assets/paparazzi.mp3"
    },
    {
        title: "Opinion",
=======
        h2: "Opinion",
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
        image: "assets/manifest.webp",
        song: "assets/Opinion.mp3"
    },
    {
<<<<<<< HEAD
        title: "Score",
=======
        h2: "Score",
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
        image: "assets/awara.jpg",
        song: "assets/Score.mp3"
    },
    {
<<<<<<< HEAD
        title: "Never Ever",
        image: "assets/Patandar.jpg",
        song: "assets/never_ever.mp3"
    },
    {
        title: "Woah",
=======
        h2: "Woah",
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
        image: "assets/Chobar.jpg",
        song: "assets/Woah.mp3"
    },
    {
<<<<<<< HEAD
        title: "Calculations",
=======
        h2: "Calculations",
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
        image: "assets/Saroor.jpg",
        song: "assets/Calculations.mp3"
    },
    {
<<<<<<< HEAD
        title: "Munde Pindan De",
=======
        h2: "Munde Pindan De",
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
        image: "assets/Jalwa.jpg",
        song: "assets/Munde Pindan De.mp3"
    },
    {
<<<<<<< HEAD
        title: "Panjabi",
=======
        h2: "Panjabi",
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
        image: "assets/Saroor.jpg",
        song: "assets/Panjabi.mp3"
    },
    {
<<<<<<< HEAD
        title: "Youth Flow",
=======
        h2: "Youth Flow",
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
        image: "assets/Chobar.jpg",
        song: "assets/Youth_Flow .mp3"
    },
];



<<<<<<< HEAD
let title = document.querySelector("#title");
let songDesc = document.querySelector("#songlist");
let ImageTag = document.getElementById("img");
=======
let h2 = document.querySelector("#title");
let ImageTag = document.getElementById("img");
let songLength = document.querySelector('.songlist');

>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
//Button Part
let playbtn = document.getElementById("play");
let forwardbtn = document.getElementById("forward");
let reversebtn = document.getElementById("reverse");
let audio = document.getElementById("audio");
<<<<<<< HEAD
=======


>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
let progress_container = document.getElementById("progress-container");
let progress = document.getElementById("progress");
let audio_current_time = document.getElementById("audio_current_time");
let audio_duration = document.getElementById("audio_duration");
let shuffle_btn = document.getElementById("shuffle");
<<<<<<< HEAD
let repeat_btn = document.getElementById("repeat");
=======
let repeat_all_btn = document.getElementById("repeat_all");

>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
let isShuffle = false;
let isRepeatAll = false
let originalSongs = [...songs];

<<<<<<< HEAD
//Song Time

let audioDu = '00:00', audioCT = '00:00';
audio.addEventListener('loadedmetadata',()=>{
    audioDu = audio.duration;
    let mint = parseInt((parseInt(audioDu/60))/10)==0? '0'+parseInt(audioDu/60) : parseInt(audioDu/60) ;
    let sec = parseInt((parseInt(audioDu%60))/10)==0? parseInt(audioDu%60)+'0' : parseInt(audioDu%60) ;
    audio_duration.innerHTML= mint +':'+ sec;
})

audio.addEventListener('timeupdate',()=>{
    audioCT = audio.currentTime;
    let CTmint = parseInt((parseInt(audioCT/60))/10)==0? '0'+parseInt(audioCT/60) : parseInt(audioCT/60) ;
    let CTsec = parseInt((parseInt(audioCT%60))/10)==0? '0' +parseInt(audioCT%60) : parseInt(audioCT%60) ;
    audio_current_time.innerText=CTmint+":"+CTsec;
    progress.style.width = progress + '%';
})

// Allow clicking on the progress bar to seek


progress.parentElement.addEventListener('click', function(e) {
    const progressWidth = progress.parentElement.offsetWidth;
    const clickPosition = e.offsetX;
    const newTime = (clickPosition / progressWidth) * audio.duration;
    audio.currentTime = newTime;
});


// playbtn
let position =0;
function updateSongDetails(position) {
    audio.setAttribute('src', songs[position].song)
    songDesc.innerHTML = `${position+1}/${songs.length}`;
    ImageTag.src = songs[position].image;
    title.innerHTML = songs[position].title;
}
updateSongDetails(position)

function playAudio() {
=======

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
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
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
<<<<<<< HEAD
playbtn.addEventListener('click', playAudio)
=======
playbtn.addEventListener('click', play)


>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e


//forward btn System
forwardbtn.addEventListener('click', () => {
    if (songs.length <= position + 1) {
        position = 0;
    } else {
        position++;
    }
<<<<<<< HEAD
    updateSongDetails(position);
    playbtn.classList.remove('bi-play-circle-fill')
    playbtn.classList.add('bi-pause-circle-fill')
    audio.play()
=======
    audio.src = songs[position].song;
    ImageTag.src = songs[position].image;
    h2.innerHTML = songs[position].h2;

    // songLength 
    songLength.innerHTML = (position + 1) + "/" + songs.length;

    audio.play();
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
});

//reverse btn System
reversebtn.addEventListener('click', () => {
    if (position == 0) {
        position = songs.length - 1;
    } else {
        position--;
    }
<<<<<<< HEAD
    updateSongDetails(position);
    playbtn.classList.remove('bi-play-circle-fill')
    playbtn.classList.add('bi-pause-circle-fill')
    audio.play()
});

//repeat btn System
console.log(repeat_btn);

let repeatBtnFlag = 'ALL';
repeat_btn.addEventListener('click', ()=>{
    if (repeatBtnFlag==='NO') {
               
        repeat_btn.classList.remove('bi-repeat-1')
        repeat_btn.classList.remove('text-primary')
        repeat_btn.classList.add('bi-repeat')
        repeatBtnFlag = "ALL";
    }else if(repeatBtnFlag==='ALL'){
        repeat_btn.classList.remove('bi-repeat-1')
        repeat_btn.classList.add('bi-repeat')
        repeat_btn.classList.add('text-primary')
        repeatBtnFlag = 'ONE';
    }else{
        repeat_btn.classList.remove('bi-repeat')
        repeat_btn.classList.remove('text-primary')
        repeat_btn.classList.add('bi-repeat-1')
        repeatBtnFlag = 'NO';
    }
})


// progress bar



// audio.addEventListener('timeupdate', function() {
//     const progress = (audio.currentTime / audio.duration) * 100;
//     progress.style.width = progress + '%';
=======
    audio.src = songs[position].song;
    ImageTag.src = songs[position].image;
    h2.innerHTML = songs[position].h2;

    // songLength 
    songLength.innerHTML = (position + 1) + "/" + songs.length;

    audio.play();

});


// progress bar
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e



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
<<<<<<< HEAD
// this is test lline
// add this also 
=======





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
>>>>>>> 7ac238b83f22711ad77413dbe74bed5c394e990e
