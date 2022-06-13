
const buttonPlay = document.querySelector('.play');
const audio = new Audio();
let isPlay = false;
let audioSrc = 'assets/sounds/drozd.mp3';

function toggleBtn (){
    buttonPlay.classList.toggle('pause')
}

function removeBtnPause () {
    buttonPlay.classList.remove('pause')
}

buttonPlay.addEventListener('click', toggleBtn);

const checkTarget = (event) => {
    if(event.target.hasAttribute('data-sounds')){
        audioSrc = `assets/sounds/${event.target.dataset.sounds}.mp3`
        audio.pause();
        isPlay = false;
    }
}


function playAudio() {
    audio.src = audioSrc;
    audio.currentTime = 0;
    if(!isPlay){
        audio.play();
        isPlay = true;
    }else{
        audio.pause();
        isPlay = false
    }
  }

  export {buttonPlay, removeBtnPause, playAudio, checkTarget};