var startButton = document.getElementById ("start");
var questionsEl = document.getElementById ("question");
var nextButton = document.getElementById("next-button");
var questionIndex = 0
var questionsArray = [
    {
        question: "Commonly used data types DO Not include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    // {
    //     question: "The condition in an if/else statement is enclosed within ____.",
    //     answer1: "quotes",
    //     answer2: "curly brackets",
    //     answer3: "parenthesis",
    //     answer4: "square brackets",
    //     correctAnswer: "parenthesis",
    // },
    // {
    //     question: "Arrays in Javascript can be used to store ____.",
    //     answer1: "numbers and strings",
    //     answer2: "other arrays",
    //     answer3: "booleans",
    //     answer4: "all of the above",
    //     correctAnswer: "all of the above",
    // },
    // {
    //     question: "String values must be enclosed within ____ when being assigned to variables.",
    //     answer1: "commas",
    //     answer2: "curly brackets",
    //     answer3: "quotes",
    //     answer4: "parenthesis",
    //     correctAnswer: "quotes",
    // },
    // {
    //     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    //     answer1: "Javascript",
    //     answer2: "terminal/bash",
    //     answer3: "for loops",
    //     answer4: "console.log",
    //     correctAnswer: "console.log",
    // },
]

function startHandler () {
    var startScreen = document.getElementById ("start-screen");
    startScreen.setAttribute("class", "hide")

    questionsEl.removeAttribute("class")

    console.log("startButton");

    getQuestion()
    // hide start screen element, unhide questions, start timer, show time
}

function getQuestion () {
    var currentQuestion = questionsArray[questionIndex]
    var questionTitle = document.getElementById ("question-title")
    var questionChoice = document.getElementById ("choices")
    questionTitle.textContent = currentQuestion.question

    currentQuestion.answers.forEach(function(choice, i) {
        var options = document.createElement("button")

        options.setAttribute("class", "choice")
        options.setAttribute("value", choice)
        options.textContent = choice
        options.onclick = steve

        // create the onclick for choice

        questionChoice.appendChild(options)
    })
       
    // var answer = document.getElementById ("answer")
    // questionTitle.textContent = currentQuestion.question
    // questionChoice.textContent = currentQuestion.answer1
    // answer.textContent = currentQuestion.correctAnswer
}

function getInfo() {
    this.value
}
// click button starts timer, also unhides first question
startButton.onclick = startHandler;