let op
let cont = 0
let whishList = new Array

while (op != 3) {

    op = Number(prompt("Digite sua opção: \n1. Cadastrar um item na lista \n2. Mostrar os itens cadastrados \n3. Sair do programa"))

    switch (op) {
        case 1:
            whishList.push(prompt(`Qual o item ${cont+1} da lista?`))
            cont++
            break;
    
        case 2:
            if (whishList.length > 0) {
                alert(whishList.join(", "))
            } else {
                alert("Não existem itens cadastrados")
            }
            break;
    
        case 3:
            break;
        default:
            alert("Desculpe, não entendi!")
            break;
    }
}



