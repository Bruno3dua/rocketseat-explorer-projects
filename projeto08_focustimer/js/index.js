import { handleButtonsHide, showElement, hideElement, fillNumber } from "./utils.js"
import './controls'
import './timer '

const btnPlay = document.querySelector('.btn-play')
const btnPause = document.querySelector('.btn-pause')
const btnStop = document.querySelector('.btn-stop')
const btnSet = document.querySelector('.btn-set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

let minutes = 0
let seconds = 0
  
let timerStarted = false

let timerTimeoutEvent

btnPlay.addEventListener('click', function () {

    if (timerStarted) {
        handleButtonsHide(btnPlay, btnPause)
        countdown()

    } else {
        handleButtonsHide(btnPlay, btnPause)
        handleButtonsHide(btnStop, btnSet)

        countdown()

        timerStarted = true
    }
})

btnPause.addEventListener('click', function () {
    clearTimeout(timerTimeoutEvent)

    handleButtonsHide(btnPlay, btnPause)
})

btnStop.addEventListener('click', function () {
    resetControls()
    updateTimerDisplay(0, 0)
    timerStarted = false
})

btnSet.addEventListener('click', function () {
    minutes = prompt("Quantos minutos deseja?") || 0

    updateTimerDisplay(minutes, 0)
})

buttonSoundOn.addEventListener('click', function () {
    handleButtonsHide(buttonSoundOff, buttonSoundOn)
})

buttonSoundOff.addEventListener('click', function () {
    handleButtonsHide(buttonSoundOff, buttonSoundOn)
})


