var startButton = document.getElementById ("start");
var questionsEl = document.getElementById ("question");
var questionIndex = 0
var questionsArray = [
    {
        title: "Commonly used data types DO Not include:",
        possibleAnswers: ["1. strings", " 2. booleans", " 3. alerts", " 4. numbers"],
        answer: "6"
    },
    {
        title: "The condition in an if/else statement is enclosed within ____.",
        possibleAnswers: ["1. quotes", " 2. curly brackets", " 3. parenthesis", " 4. square brackets"],
        answer: "6"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        possibleAnswers: ["1. numbers and strings", " 2. other arrays", " 3. booleans", " 4. all of the above"],
        answer: "6"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        possibleAnswers: ["1. commas", " 2. curly brackets", " 3. quotes", " 4. parenthesis"],
        answer: "6"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        possibleAnswers: ["1. Javascript", " 2. terminal/bash", " 3. for loops", " 4. console.log"],
        answer: "6"
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
    questionTitle.textContent = currentQuestion.title
    questionChoice.textContent = currentQuestion.possibleAnswers
    answer.textContent = currentQuestion.answer
}
// click button starts timer, also unhides first question
startButton.onclick = startHandler;