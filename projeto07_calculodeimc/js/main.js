import { Modal } from "./modal.js"
import { alertError } from "./alertError.js"
import { notNumber, calculateImc } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weightInput')
const inputHeight = document.querySelector('#heightInput')

inputHeight.addEventListener('input', () => alertError.close())
inputWeight.addEventListener('input', () => alertError.close())

form.onsubmit = (e) => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
    
    if(weightOrHeightIsNotANumber) {
        alertError.open()
        return
    }

    alertError.close()

    const result = calculateImc(weight, height)
    displayResults(result)
} 

function displayResults(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

