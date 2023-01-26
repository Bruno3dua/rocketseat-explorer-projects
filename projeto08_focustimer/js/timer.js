import Sounds from "./sounds.js"

const sound = Sounds

export function Timer({
    displayMinutes,
    displaySeconds,
    timerTimeoutEvent,
    minutes,
    seconds,
    resetControls
}) {
    function timeout () {
        clearTimeout(timerTimeoutEvent)
    }

    function updateDisplay(minutes, seconds) {
        displayMinutes.textContent = fillNumber(minutes)
        displaySeconds.textContent = fillNumber(seconds)
    }

    function reset() {
        updateDisplay(0, 0)
        timeout()
    }

    function countdown() {
        minutes = Number(displayMinutes.textContent)
        seconds = Number(displaySeconds.textContent)

        timerTimeoutEvent = setTimeout(function () {

            if (minutes <= 0 && seconds == 0) {
                resetControls()
                sound().timerEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60

                minutes = minutes - 1
                updateDisplay(minutes - 1, seconds)
            }

            updateDisplay(minutes, seconds - 1)

            countdown()
        }, 1000)

        return {
            countdown
        }
    }

    return {
        countdown,
        updateDisplay,
        reset,
        timeout
    }
}

function fillNumber(number) {
    return String(number).padStart(2, '0')
}