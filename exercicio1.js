//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
//perímetro.

let base = Number(prompt('Digite a base do retângulo: '))
let altura = Number(prompt('Agora, digite a altura do retângulo: '))
let area = base * altura
let perimetro = (base + altura)*2
alert('A área do retângulo é: ' + area)
alert('O perímetro do retângulo é: ' + perimetro)