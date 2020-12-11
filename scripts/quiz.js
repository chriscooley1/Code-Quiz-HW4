function Question(ask, options, answerIndex) {
    this.ask = ask;
    this.options = options;
    this.answerIndex = answerIndex;
};

var questionsArray = [];
var currentQuestion = Question("", [], 0);
var timerInterval;
var secondsRemaining = 90;
var runningScore = 0;

let askElement = document.getElementById("ask");
let optionsElement = document.getElementById("options");
let questionResultsElement = document.getElementById("question-results");
let runningScoreElement = document.getElementById("running-score");
let timerElement = document.getElementById("timer");

optionsElement.addEventListener("click", answeredQuestion);

function startQuiz(){
    var q1 = new Question("Commonly used data types DO NOT include ___:", ["strings", "booleans", "alerts", "numbers"], 2);
    var q2 = new Question("The condition in an if/else statement is enclosed within ___:", ["quotes", "curly brackets", "paranthesis", "square brackets"], 2);
    var q3 = new Question("Arrays in Javascript can be used to store ___:", ["numbers and strings", "other arrays", "booleans", "all of the above"], 3);
    var q4 = new Question("String values must be enclosed within ___ when being assigned to variables.", ["commas", "curly brackets", "quotes", "paranthesis"], 2);
    var q5 = new Question("A very useful tool used during development and debugging for printing content to the debugger is ___:", ["JavaScript", "Terminal/Bash", "for loops", "console.log"], 3);

    questionsArray.push(q1);
    questionsArray.push(q2);
    questionsArray.push(q3);
    questionsArray.push(q4);
    questionsArray.push(q5);
};

