
export default function timer() {

    function updateTimerDisplay(minutes, seconds) {
        displayMinutes.textContent = fillNumber(minutes)
        displaySeconds.textContent = fillNumber(seconds)
    }
    
    function countdown() {
}
    minutes = Number(displayMinutes.textContent)
    seconds = Number(displaySeconds.textContent)

    timerTimeoutEvent = setTimeout(function () {

        if (minutes <= 0 && seconds == 0) {
            resetControls()
            timerStarted = false
            return
        }

        if (seconds <= 0) {
            seconds = 60

            minutes = minutes - 1
            updateTimerDisplay(minutes - 1, seconds)
        }

        updateTimerDisplay(minutes, seconds - 1)

        countdown()
    }, 1000)

    return {
        countdown
    }
}
