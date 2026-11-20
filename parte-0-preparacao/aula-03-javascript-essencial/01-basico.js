// Rode com:  node 01-basico.js

// Variáveis: const (não será reatribuída) e let (pode mudar). Evite var.
const nome = 'Maria'
let idade = 20
idade = idade + 1

// Template literal: crases e ${} dentro do texto
console.log(`Olá, ${nome}! Ano que vem você terá ${idade + 1} anos.`)

// Tipos: string, number, boolean, null, undefined
console.log(typeof nome, typeof idade, typeof true)

// Comparação: use SEMPRE === e !== (comparam valor e tipo)
console.log(1 === '1') // false
console.log(1 == '1') // true (evite: o JavaScript converte os tipos)

// Funções: tradicional e arrow function
function soma(a, b) {
  return a + b
}
const subtrai = (a, b) => a - b // arrow function
const dobro = (n) => n * 2 // com uma única expressão o return é implícito

console.log(soma(2, 3), subtrai(5, 1), dobro(4))

// Condicional e laço
if (idade >= 18) {
  console.log('Maior de idade')
} else {
  console.log('Menor de idade')
}
for (let i = 0; i < 3; i++) {
  console.log('contagem', i)
}
