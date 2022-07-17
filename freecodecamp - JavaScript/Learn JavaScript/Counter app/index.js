// document.getElementById("count-el").innerText = 5


// pseudo code: 
// initialize the count as 0
// listen for clicks on the increment btn
// increment the count variable when the btn is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count++
    countEl.innerHTML = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = 0
    count = 0
}