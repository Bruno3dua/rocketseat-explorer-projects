let op
let cont = 0

const calcIMC = (patient) => {
    let imc = (patient.Weight / (patient.Height * patient.Height)).toFixed(1)
    return imc
}

const patients = [
    {
        Id: "1",
        name: "Bruno",
        Age: "19",
        Weight: "103",
        Height: "1.80"
    },
    { 
        Id: "2",
        name: "jorge",
        Age: "15",
        Weight: "56",
        Height: "1.56"
    },
    {
        Id: "3",
        name: "Jean",
        Age: "43",
        Weight: "80",
        Height: "1.65"
    }
]

for (let i = 0; i < patients.length; i++) {
    alert(`O Paciente ${patients[i].name} possui o  IMC de  ${calcIMC(patients[i])}`)
}

// for (let i = 0; i < patients.length; i++) {
//     alert(`
//     O Paciente ${patients[i].name} tem:
//     Idade: ${patients[i].Age}
//     Altura: ${patients[i].Height}
//     Peso: ${patients[i].Weight}
//     `)
// }