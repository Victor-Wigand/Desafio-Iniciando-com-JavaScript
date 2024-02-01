// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
window.alert('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let firstNumber = +window.prompt('Insira o primeiro número: ')
let secondNumber = +window.prompt('Insira o segundo número: ')

window.alert(
  `A soma de ${firstNumber} e ${secondNumber} é: ${firstNumber + secondNumber}.`
)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let variable = '1' + 2

if (typeof variable !== 'number') window.alert('Não é um número.')
else window.alert('É um número.')

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
if (typeof variable !== 'string') window.alert('Não é uma string.')
else window.alert('É uma string.')

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
if (typeof variable !== 'boolean') window.alert('Não é um booleano.')
else window.alert('É um booleano.')

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let num1 = +window.prompt('Insira o primeiro número: ')
let num2 = +window.prompt('Insira o segundo número: ')

const subtraction = num1 - num2
const multiply = num1 * num2
const division = num1 / num2

window.alert(`
  A subtração de ${num1} e ${num2} é: ${subtraction};
  A multiplicação de ${num1} e ${num2} é: ${multiply};
  A divisão de ${num1} e ${num2} é: ${division}.
`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isEvenOrOdd = +window.prompt('Insira um número para verificar se é par: ')

if (isEvenOrOdd % 2 === 0) window.alert('É um número par.')
else window.alert('Não é um número par.')

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isEvenOrOdd2 = +window.prompt(
  'Insira um número para verificar se ímpar: '
)

if (isEvenOrOdd % 2 !== 0) window.alert('É um número ímpar.')
else window.alert('Não é um número ímpar.')