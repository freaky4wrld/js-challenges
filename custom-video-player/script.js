const media = document.querySelector('video')
const controlPanel = document.querySelector('.controls')
const playPauseBtn = document.querySelector('.play')
const stopBtn = document.querySelector('.stop')
const timerSection = document.querySelector('.timer')
const progress = document.querySelector("input[type='range']")

const timestamp = document.querySelector('span')

media.removeAttribute('controls')
controlPanel.style.visibility = 'visible'


function playPauseMedia(){
    if(media.paused){
        playPauseBtn.children[0].classList.toggle('hide')
        playPauseBtn.children[1].classList.toggle('hide')
        media.play()
    }else{
        playPauseBtn.children[0].classList.toggle('hide')
        playPauseBtn.children[1].classList.toggle('hide')
        media.pause()
    }
}

function mediaStop(){
    media.pause()
    media.currentTime = 0
    playPauseBtn.children[0].classList.remove('hide')
    playPauseBtn.children[1].classList.add('hide')
}

function updateProgress() {
    progress.value = (media.currentTime / media.duration) * 100;
  
    const minutes = Math.floor(media.currentTime / 60);
    const seconds = Math.floor(media.currentTime - minutes * 60);

    const minuteValue = minutes.toString().padStart(2, "0");
    const secondValue = seconds.toString().padStart(2, "0");
    
    timestamp.innerText = `${minuteValue}:${secondValue}`;
  }
  
  // Set media time to progress
  function setMediaProgress() {
    media.currentTime = (+progress.value * media.duration) / 100;
  }

media.addEventListener('click',playPauseMedia)
media.addEventListener('timeupdate', updateProgress)
media.addEventListener('ended',mediaStop)
playPauseBtn.addEventListener('click', playPauseMedia)
stopBtn.addEventListener('click',mediaStop)
progress.addEventListener('change', setMediaProgress)

