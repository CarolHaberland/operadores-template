// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

idade = minhaIdade > idadeAmiga

console.log("Sua idade é mais que a do seu melhor amigo(a)?", idade)

idade = minhaIdade - idadeAmiga

console.log("A diferenteça de idade é de:", idade)



// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d
b && a && !d
a ││  d
c && !d

