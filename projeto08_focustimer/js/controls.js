export default function Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop,
    buttonSoundOn,
    buttonSoundOff
}) {

    function reset() {
        btnPlay.classList.remove('hide')
        btnSet.classList.remove('hide')

        btnStop.classList.add('hide')
        btnPause.classList.add('hide')
    }

    function play() {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
        btnSet.classList.add('hide')
        btnStop.classList.remove('hide')
    }

    function pause() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        if (!newMinutes)
            return false
        else
            return newMinutes
    }

    function soundOn () {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
    }

    function soundOff () {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
        soundOff,
        soundOn
    }
}

