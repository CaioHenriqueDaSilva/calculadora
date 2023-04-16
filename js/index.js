function calcular() {
const res = document.querySelector('#res')
const mais = document.querySelector('#mais')
const menos = document.querySelector('#menos')
const divisao = document.querySelector('#divisao')
const mult = document.querySelector('#mult')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
let num1Value = Number(num1.value)
let num2Value = Number(num2.value)
res.innerHTML = '';
if (num1Value == 0 || num2Value == 0) {
    alert('digite os numeros nos campos')
    res.innerHTML = '';

}
if (mais.checked) {
    let somaMais = num1Value + num2Value
    res.innerHTML = `a soma entre ${num1Value} + ${num2Value} = ${somaMais}`
}
if (menos.checked) {
    let somaMenos = num1Value - num2Value
    res.innerHTML = `a soma entre ${num1Value} - ${num2Value} = ${somaMenos}`
}   
if (divisao.checked) {
    let somaDiv = num1Value / num2Value
    res.innerHTML = `a soma entre ${num1Value} / ${num2Value} = ${somaDiv}`
}
if (mult.checked) {
    let somaMult = num1Value * num2Value
    res.innerHTML = `a soma entre ${num1Value} * ${num2Value} = ${somaMult}`
}

}