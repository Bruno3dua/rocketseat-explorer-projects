const RandNum = Math.round(Math.random() * 10)
let userTry
let attempts = 0


while(userTry != RandNum) {

    userTry = Number(prompt("Adivinhe o número em que eu estou pensando"))
    attempts++

    if (userTry > RandNum) 
        alert("Errou, Tente  novamente, o numero é menor que esse")
    else if (userTry < RandNum)
        alert("Errou, Tente  novamente, o numero é maior que esse")
}

alert(`Parabéns você acertou em ${attempts} tentativas, o numero era ${RandNum}`)
