let phrase = "Essa frase irá ser alterada."

//O metodo .split separa uma string quando encontra nela o parametro passado, transformando em um array.
let myArray = phrase.split(" ")
console.log(myArray)

// O metodo .join Junta todos os elementos de um array em uma string e recebe como parametro uma string que irá ficar entre os espaços vazios.
let phraseSneak = myArray.join("_")
console.log(phraseSneak)

//Mostra true se a string conter o parâmetro e falso caso contrario
console.log(phrase.includes("irá"))