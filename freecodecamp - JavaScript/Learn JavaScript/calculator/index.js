let num1 = 8
let num2 = 2

document.getElementById("num1-el").innerHTML = num1
document.getElementById("num2-el").innerHTML = num2


let sum = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sum.innerHTML = "Sum: " + result
}
function substract() {
    let result = num1 - num2
    sum.innerHTML = "Sum: " +result
}
function divide() {
    let result = num1 / num2
    sum.innerHTML = "Sum: " + result
}
function multiply() {
    let result = num1 * num2
    sum.innerHTML = "Sum: " + result
}