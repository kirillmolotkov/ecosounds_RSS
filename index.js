import {filterBlock, imagesToggle} from './assets/js/imagesSwitch.js'
import {buttonPlay, removeBtnPause, playAudio, checkTarget} from './assets/js/soundSwitch.js'

filterBlock.addEventListener('click', imagesToggle)

filterBlock.addEventListener('click', removeBtnPause);

buttonPlay.addEventListener('click', playAudio);

const checkButton = () =>{
    filterBlock.addEventListener('click', checkTarget)
}
checkButton();











  
  
