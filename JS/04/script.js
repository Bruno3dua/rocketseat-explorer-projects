let studentName = prompt("Qual o nome do aluno?")
let studentGrade1 = Number(prompt("Qual sua nota 1?"))
let studentGrade2 = Number(prompt("Qual sua nota 2?"))
let studentGrade3 = Number(prompt("Qual sua nota 3?"))
let finalGrade = ((studentGrade1 + studentGrade2 + studentGrade3) / 3).toFixed(2)

if ((finalGrade) < 6) {
    alert(`Poxa vida ${studentName}!, sua media foi de ${finalGrade} e portanto você não passou, Boa sorte na prova de recuperação!`)
} else {
    alert(`Parabéns ${studentName}, Sua media foi ${finalGrade}. Aprovado!`)
}