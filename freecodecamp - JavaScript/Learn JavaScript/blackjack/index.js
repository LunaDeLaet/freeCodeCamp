
let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")


let player = {
    name: "Per",
    chips: 200,
}
let playerEl = document.getElementById("player-el")
playerEl.innerHTML = player.name + ": €" + player.chips



function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13+1)
    
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}



function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {

    cardsEl.innerHTML = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " "
    }
    sumEl.innerHTML = "Sum: " + sum

if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum === 21 ) {
    message = "Woohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.innerHTML = message
}



function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}