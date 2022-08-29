// let nome
// let idade

// console.log(typeof nome)
// console.log(typeof idade)

//Foram impressos para nome e idade o tipo 'undefined', justamente porque não foi atribuído nenhum valor a essas variáveis.

let nome = (prompt("Qual o seu nome?"))
let idade = Number(prompt("Qual a sua idade?"))

console.log(typeof nome)
console.log(typeof idade)

//Foram impressos para nome e idade, respectivamente, os tipos 'string' e 'number', pois a primeira recebe um valor na forma de texto e a segunda na forma de número.

console.log("Olá", nome+", você tem", idade, "anos.")
