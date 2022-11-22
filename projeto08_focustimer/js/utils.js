export function handleButtonsHide(button1, button2) {
    button1.classList.toggle('hide')
    button2.classList.toggle('hide')
}

export function hideElement(element) {
    element.classList.add('hide')
}

export function showElement(element) {
    element.classList.remove('hide')
}

export function fillNumber(number) {
    return String(number).padStart(2, '0')
}
