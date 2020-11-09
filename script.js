var startButton = document.getElementById ("start");
var questionsEl = document.getElementById ("question");
var questionIndex = 0
var questionsArray = [
    {
        title: "What's 9 + 10",
        possibleAnswers: ["19", "21", "7", "34"],
        answer: "19"
    },
    {
        title: "What's 2 + 4",
        possibleAnswers: ["6", "21", "7", "34"],
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
    questionTitle.textContent = currentQuestion.title
}
// click button starts timer, also unhides first question
startButton.onclick = startHandler;