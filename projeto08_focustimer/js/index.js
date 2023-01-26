import { Timer } from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sounds.js"

const btnPlay = document.querySelector('.btn-play')
const btnPause = document.querySelector('.btn-pause')
const btnStop = document.querySelector('.btn-stop')
const btnSet = document.querySelector('.btn-set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let timerTimeoutEvent
let minutes = 0
let seconds = 0

const controls = Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop,
    buttonSoundOn,
    buttonSoundOff
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    timerTimeoutEvent,
    minutes,
    seconds,
    resetControls: controls.reset
})

const sound = Sounds()

btnPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

btnPause.addEventListener('click', function () {
    controls.pause()
    timer.timeout()
    sound.pressButton()
})

btnStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

btnSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    sound.pressButton()

    if(!newMinutes) {
        controls.reset()
        return
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
})

buttonSoundOn.addEventListener('click', function () {
    controls.soundOn()
    sound.bgAudioPlay()
})

buttonSoundOff.addEventListener('click', function () {
    controls.soundOff()
    sound.bgAudioPause()
})