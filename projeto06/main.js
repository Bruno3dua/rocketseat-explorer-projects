//Variáveis
const attemptMsg = document.querySelector(".screen2 h2")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let attempts = 0
let randNum = Math.round(Math.random() * 10)

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//Função callback
function handleTryClick(e) {
    e.preventDefault() //não executar o padrão dese evento

    const inputNumber =  document.querySelector("#inputNumber")
    
    attempts++ 
    
    if (Number(inputNumber.value) == randNum) {
        toggleScreens()
        attemptMsg.innerText = `Acertou em ${attempts} tentativas`
    }

    inputNumber.value = ""
}

function handleResetClick() {
    toggleScreens()
    attempts = 0
    randNum = Math.round(Math.random() * 10)
}

function toggleScreens() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}