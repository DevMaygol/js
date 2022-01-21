let num = [5, 8, 2, 9, 3]

num.push(1) //Adiciona e força o numero dentro do push(numero) para o ultimo elemento do vetor
//num[6]=6 //Adiciona um valor em um elemento específico num[elemento]=valor
//num.length //comprimento do vetor
num.sort() //coloca os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${pos}`)
}
