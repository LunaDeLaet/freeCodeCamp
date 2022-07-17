// USE GOOGLE CHROME INSTEAD OF FIREFOX



// add #game and #score to variable
const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
// add score counter
let score = 0

const jeopardyCategories = [ // array of categories
  { // object of genre and questions
    genre: 'WHO',
    questions: [ //array of questions in genre WHO
      { // object of question with answers
        question: 'Who wrote the Harry Potter books?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: 'easy',
      },
      {
        question: 'Who was born on Krypton',
        answers: ['Aquaman', 'Superman'],
        correct: 'Superman',
        level: 'medium',
      },
      {
        question: 'Who designed the first car?',
        answers: ['Karl Benz', 'Henry Ford'],
        correct: 'Karl Benz',
        level: 'hard',
      },
    ],
  },
  {
    genre: 'WHERE',
    questions: [
      {
        question: 'Where is Buckingham Palace?',
        answers: ['Richmond', 'London'],
        correct: 'London',
        level: 'easy',
      },
      {
        question: 'Where is the Colosseum',
        answers: ['Rome', 'Milan'],
        correct: 'Rome',
        level: 'medium',
      },
      {
        question: 'Where is Mount Kilamanjaro',
        answers: ['Zimbabwe', 'Tanzania'],
        correct: 'Tanzania',
        level: 'hard',
      },
    ],
  },
  {
    genre: 'WHEN',
    questions: [
      {
        question: 'When is Christmas?',
        answers: ['30th Dec', '24th/25th Dec'],
        correct: '24th/25th Dec',
        level: 'easy',
      },
      {
        question: 'When was JFK Shot?',
        answers: ['1963', '1961'],
        correct: '1963',
        level: 'hard',
      },
      {
        question: 'When was WW2?',
        answers: ['1932', '1941'],
        correct: '1941',
        level: 'medium',
      },
    ],
  },
  {
    genre: 'WHAT',
    questions: [
      {
        question: 'What is the capital of Saudi Arabia?',
        answers: ['Jeddah', 'Riyadh'],
        correct: 'Riyadh',
        level: 'hard',
      },
      {
        question: 'What do Koalas eat?',
        answers: ['Straw', 'Eucalypt'],
        correct: 'Eucalypt',
        level: 'medium',
      },
      {
        question: 'What is a kg short for',
        answers: ['Kilojoule', 'Kilogram'],
        correct: 'Kilogram',
        level: 'easy',
      },
    ],
  },
  {
    genre: 'HOW MANY',
    questions: [
      {
        question: 'How many players in a football team?',
        answers: ['15', '11'],
        correct: '11',
        level: 'easy',
      },
      {
        question: 'How many seconds in an hour?',
        answers: ['36000', '3600'],
        correct: '3600',
        level: 'medium',
      },
      {
        question: 'How many people in China?',
        answers: ['1.1 bil', '1.4 bil'],
        correct: '1.4 bil',
        level: 'hard',
      },
    ],
  },
]

// create category
function addCategory(category) {
    // create column in a div.genre-column
    const column = document.createElement('div')
    column.classList.add('genre-column')

    // create genre title in a div.genre-title
    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    // give title the text of genre within category
    genreTitle.innerHTML = category.genre

    // add genretitle to column
    column.append(genreTitle)
    // add column to div.game
    game.append(column)


    // loop through every question in questions array 
    category.questions.forEach((question) => {

        //add card div.card and add to column
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        // add points for each level
        if (question.level === 'easy') {
        card.innerHTML = 100
        }
        if (question.level === 'medium') {
        card.innerHTML = 200
        }
        if (question.level === 'hard') {
        card.innerHTML = 300
        }

        // set attributes to items inside question
        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())
        
        // flip card on click
        card.addEventListener('click', flipCard)
    })
}

jeopardyCategories.forEach((category) => addCategory(category))

function flipCard() {
    // empty out card
    this.innerHTML = ''
    // change style of flipped card
    this.style.fontSize = '15px'
    this.style.lineHeight = '30px'

    // display text of question
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')

    textDisplay.innerHTML = this.getAttribute('data-question')


    // create 2 buttons
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')
    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')

    // add answer 1 or answer 2 to buttons
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    
    // if click on button, get result
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    
    // add question and buttons to flipped card
    this.append(textDisplay, firstButton, secondButton)

    // look up all the cards with querySelectorall and make it an array
    const allCards = Array.from(document.querySelectorAll('.card'))
    // for each card, disable flipping from flipped card
    allCards.forEach((card) => card.removeEventListener('click', flipCard))
}



function getResult() {
    // look up all the cards with querySelectorall and make it an array
    const allCards = Array.from(document.querySelectorAll('.card'))
    // for each card, add flip on click
    allCards.forEach((card) => card.addEventListener('click', flipCard))

    // assign card of button to const
    const cardOfButton = this.parentElement

    // if answer is correct
    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
        
        // add data-value to score (make the string and integer first)
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        
        //show score in browser
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')
        
        // remove childs with a delay
        setTimeout(() => {
            while (cardOfButton.firstChild) { // keep doing it until no child left
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            // display points on card
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
            }, 100) // after 100 miliseconds
    } else { // else display wrong
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            // 0 points
            cardOfButton.innerHTML = 0
            }, 100)
    }
    // we are done with this card => remove flip
    cardOfButton.removeEventListener('click', flipCard)
}