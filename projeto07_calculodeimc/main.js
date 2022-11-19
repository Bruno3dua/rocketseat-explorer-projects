// Variáveis
const btnCalc = document.querySelector("#btnCalc")
const weight = document.querySelector('#weightInput')
const height = document.querySelector('#heightInput')
const modal = document.querySelector(".modalWrapper")
const error = document.querySelector(".error")
const btnClose = document.querySelector(".close")
const imcMsg = document.querySelector(".modalCard h1")

// Eventos
btnCalc.addEventListener('click', calcIMC)
btnClose.addEventListener('click', () => toggleHideClass(modal))

// Funções
function calcIMC(event) {
    event.preventDefault()
    
    let numWeight = Number(weight.value)
    let numHeight = Number(height.value)/100
    let imc = (numWeight / (numHeight * numHeight)).toFixed(1)
    
    if (imc < 100) {
        error.classList.add("hide")
        imcMsg.innerHTML = `Seu IMC é de ${imc}`
        toggleHideClass(modal)
    } else {
        toggleHideClass(error)
    }
}

function toggleHideClass(className) {
    className.classList.toggle("hide")
}
