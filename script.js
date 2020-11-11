var startButton = document.getElementById ("start");
var questionsEl = document.getElementById ("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var nextButton = document.getElementById("next-button");
var questionIndex = 0
var questionsArray = [
    {
        question: "Commonly used data types DO Not include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correctAnswer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
        correctAnswer: "parenthesis",
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correctAnswer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parenthesis",
        correctAnswer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "Javascript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console.log",
        correctAnswer: "console.log",
    },
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
    var answer = document.getElementById ("answer")
    questionTitle.textContent = currentQuestion.question
    questionChoice.textContent = currentQuestion.answer1
    answer.textContent = currentQuestion.correctAnswer
}
// click button starts timer, also unhides first question
startButton.onclick = startHandler;