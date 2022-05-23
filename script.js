
// Variables
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song titles
const songs = ['Ella', 'Dada', 'Said', 'Bounce'];

// keep track of songs
let songIndex = 3;

// ** Initially load song into the DOM
// Call function loadSong which takes 
// in the song array with whatever the songs index is
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `Music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
};

// play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play'); //changes the play button
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play() //plays audio

};

// pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause() // pauses audio

};

// prev song
function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
};

// next song
function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {   //checks to see if we are at the end. Acessing an array from the end
        songIndex = 0                     // set the song index to the first song which is zero
    }

    loadSong(songs[songIndex])

    playSong()
};

//update progress bar

function updateProgress(e) {                  // function takes in a event object   (e)
    const { duration, currentTime } = e.srcElement //  console.log(e.srcElement.currentTime) we get the audio tag then get the song timing updated in real time on the console 
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`     //width of progress set to whatever progress Perscent is 
}

//sets progress bar / current  time to wherever we click

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}



//Event listeners
playBtn.addEventListener('click', () => {

    const isPlaying = musicContainer.classList.contains('play'); // we set the isPlaying to musicContainer.classList and we wanna check if the classlist contains class of play


    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
});


//change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//progress bar
audio.addEventListener('timeupdate', updateProgress);

//tap on progress 
progressContainer.addEventListener('click', setProgress);

//when song ends
audio.addEventListener('ended', nextSong);  // listen for ended


// alert wish
const wish = document.querySelector('#tap-wish');

wish.addEventListener('click', () => {

    alert("Hey!🌹👋🏾 I wish you a happy birthday, and the all the good things of life🎉🤍 ")
    return wish;

});


//Learnt about the HTML 5 audio API


