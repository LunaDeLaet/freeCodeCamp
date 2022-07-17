// put scoreDisplay in score-display div
const scoreDisplay = document.getElementById('score-display')
// put questionDisplay in question-display div
const questionDisplay = document.getElementById('question-display')


// make tips, options and correct answers
const questions = [ //array
    {  // object
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },
    { 
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjecent'],
        correct: 2
    },
    { 
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 2
    },
    { 
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 1
    },
    { 
        quiz: ['fast', 'quick', 'promt'],
        options: ['charity', 'rapid'],
        correct: 2
    }
]

// create score
let score = 0
// collect clicked buttons in array to be able to disable buttons
let clicked = []

// assign score to scoreDisplay 
scoreDisplay.textContent = score

// make questions
function populateQuestions() {

    // for each question from questions array
    questions.forEach(question => {

        // add div for each question 
        const questionBox = document.createElement('div')
        // give questionbox a class
        questionBox.classList.add('question-box')
        
        // add logo
        const logoDisplay = document.createElement('h1')
        // assign symbol to logo
        logoDisplay.textContent = "✏"
        // put logo in questionbox
        questionBox.append(logoDisplay)

        // create the tips for each question
        question.quiz.forEach(tip => {

            // create paragraph for eacht tip
            const tipText = document.createElement("p")
            // put tips inside p
            tipText.textContent = tip
            // put tips in questionbox
            questionBox.append(tipText)
        })


        // add answer options buttons
        const questionButtons = document.createElement('div')
        // add class to div
        questionButtons.classList.add('question-buttons')
        // add buttons to questionBox
        questionBox.append(questionButtons)

        // for each quiz in question create an option
        question.options.forEach((option, optionIndex) => {
            // add button element
            const questionButton = document.createElement('button')
            // add class to buttons
            questionButton.classList.add('question-button')
            // give buttons text content
            questionButton.textContent = option



            // check for results
            // if click is done, checkAnswer: check if answer is correct // make callback function to pass things between () through
            questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex +1, question.correct))


            // put buttons in questionButtons
            questionButtons.append(questionButton)
        })

        // create div with class answer-display for displaying right or wrong
        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')
        
        // add answer display to question box
        questionBox.append(answerDisplay)


        // add questionBox to question-display div
        questionDisplay.append(questionBox)
    })
}

// run code
populateQuestions()


function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    // if optionIdex = correct answer => update score
    if (optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, "Correct!", 'correct')
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, "Wrong!", 'wrong')

    }

    // if we click on button, add option to array
    clicked.push(option)
    // if clicked array includes option
    questionButton.disabled = clicked.includes(option)
}


function addResult(questionBox, answer, className) {
    // find div.answer-display
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)

    answerDisplay.textContent = answer
}