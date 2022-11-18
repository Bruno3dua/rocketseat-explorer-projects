let whishList = new Array

for (let i = 0; i < 10 ; i++) {
    whishList.push(prompt(`Qual o item ${i + 1} da lista?`))
}

alert(whishList.join(", "))