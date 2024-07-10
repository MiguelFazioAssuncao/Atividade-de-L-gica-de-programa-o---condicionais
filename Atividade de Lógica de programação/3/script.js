let A = Number(prompt("Digite um número"))

MC = A + 1
MF = A - 1

if(Number.isInteger(A) === true){
    alert(`O sucessor de ${A} é: ${MC}, seu antecessor é o número: ${MF}`)
} else{
    alert(`O numero precisa ser inteiro!`)
}

