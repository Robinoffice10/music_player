let Songs = [
    {
        h2: "Score",
        image: "assets/awara.jpg",
        song: "assets/Score.mp3"
    },
    {
        h2: "Calculations",
        image: "assets/Saroor.jpg",
        song: "assets/Calculations.mp3"
    },
    {
        h2: "Munde Pindan De",
        image: "assets/Jalwa.jpg",
        song: "assets/Munde Pindan de.mp3"
    },
    {
        h2: "Opinion",
        image: "assets/manifest.webp",
        song: "assets/Opionin.mp3"
    },
    {
        h2: "Panjabi",
        image: "assets/Saroor.jpg",
        song: "assets/Panjabi.mp3"
    },
    {
        h2: "Youth Flow",
        image: "assets/Chobar.jpg",
        song: "assets/Youth Flow.mp3"
    },
    {
        h2: "Woah",
        image: "assets/Chobar.jpg",
        song: "assets/Woah.mp3"
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

//Play Function
audio.setAttribute('src', Songs[0].song)
ImageTag.src = Songs[0].image;
h2.innerHTML = Songs[0].h2;
isPlaying = 0;

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



// songLength 
let position = 1;
songLength.innerHTML = position + "/" + Songs.length;



//forward btn System
position = 0;
forwardbtn.addEventListener('click', () => {
    if (Songs.length <= position + 1) {
        position = 0;
    } else {
        position++;
    }
    audio.src = Songs[position].song;
    ImageTag.src = Songs[position].image;
    h2.innerHTML = Songs[position].h2;

    // songLength 
    songLength.innerHTML = (position + 1) + "/" + Songs.length;

    audio.play();
});

//reverse btn System

position = 0;
reversebtn.addEventListener('click', () => {
    if (position == 0) {
        position = Songs.length - 1;
    } else {
        position--;
    }
    audio.src = Songs[position].song;
    ImageTag.src = Songs[position].image;
    h2.innerHTML = Songs[position].h2;

    // songLength 
    songLength.innerHTML = (position + 1) + "/" + Songs.length;

    audio.play();

});

    
    audio.addEventListener("timeupadte",()=>{
        let{ duration ,currentTime} =audio;
        console.log(duration,currentTime);
    });