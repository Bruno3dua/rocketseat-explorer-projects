//Criando array com constructor
let myArray1 = new Array("b","c","d") 
let myArray2 = new Array(3) 

//Contando o tamanho do array
console.log(myArray1.length)


//Transformando string em array
let word = "manipulação"
let wordArray = Array.from(word) 
console.log(wordArray)

//Adicionar um item no fim
myArray1.push("e")
//Adicionar no começo
myArray1.unshift("a")
//Remover do fim
myArray1.pop()
//Remover do começo
myArray1.shift()
//Pegar soemnte alguns elemento do array
console.log(myArray1.slice(0, 2))
//Remover um ou mais itens em qulquer posição do array
myArray1.splice(0, 2)
//Encontrar a posição de um elemento nio array
let index = myArray1.indexOf("d")
myArray1.splice(index, 1)
