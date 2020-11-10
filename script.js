var startButton = document.getElementById ("start");
var questionsEl = document.getElementById ("question");
var questionIndex = 0
var questionsArray = [
    {
        question: "Commonly used data types DO Not include:",
        possibleAnswers: ["strings", " booleans", " alerts", " numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        possibleAnswers: ["quotes", " curly brackets", " parenthesis", " square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        possibleAnswers: ["numbers and strings", " other arrays", " booleans", " all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        possibleAnswers: ["commas", " curly brackets", " quotes", " parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        possibleAnswers: ["Javascript", " terminal/bash", " for loops", " console.log"],
        answer: "console.log"
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
    questionChoice.textContent = currentQuestion.possibleAnswers
    answer.textContent = currentQuestion.correctAnswer
}
// click button starts timer, also unhides first question
startButton.onclick = startHandler;