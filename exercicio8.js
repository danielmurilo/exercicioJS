//8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
//seu raio e sua altura.
let altura = Number(prompt('Digite a altura da lata: '))
let raio = Number(prompt('Digite o raio da lata: '))
//V = π · r² · h
let volume = 3.14 * (raio ** 2) * altura
alert('O volume é de: ' + volume)