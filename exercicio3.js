//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
let raio = Number(prompt('Digite o raio da circunferencia: '))
const pi = Number(3.14)
//A = π . r2
let area = pi * (raio ** 2)
//P = 2 π . r
let perimetro = (2*pi)*raio
alert('A área da circunferencia é: ' + area)
alert('O perímetro da circunferencia é: ' + perimetro)