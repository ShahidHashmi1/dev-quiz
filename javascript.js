var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var startBtn = document.querySelector(".startBtn");
var timerEl = document.getElementById("timer");
var homeScreen = document.getElementById("homeScreen");
var quizPlay = document.getElementById("quizPlay");
// var navTimer = document.querySelector(".navTimer");
var indexQuestion = 0;
var secondsLeft = 100;
var questionTitle = document.querySelector("#question");
var questionAnswers = document.querySelector("#answerChoices");

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// 2
function viewQuestion() {
  var currentQuestionObj = quizQuestions[indexQuestion];
  questionTitle.textContent = currentQuestionObj.question;
  for (let index = 0; index < currentQuestionObj.choices.length; index++) {
    var button = document.createElement("button");
    button.textContent = currentQuestionObj.choices[index];
    questionAnswers.appendChild(button);

    // insert and/or append the answers into the choice boxes
  }
}

// if the answerChoices/ questionAnswers button that is clicked correct/ equal to the quizQuestions array's answer, then it is correct and we want to view the next question //

// 3
// function correctAnswer () {
//     if (questionAnswers == quizQuestions[choices]) {
//         console.log()
//     } else () {
//         timerEl.textContent -= secondsLeft (30);
//     }
//     return viewQuestion();
// };

// 1
function startQuiz() {
  startTimer();
  homeScreen.setAttribute("class", "hidePage");
  quizPlay.removeAttribute("class");
  timerEl.removeAttribute("class");
  viewQuestion();
}

var quizQuestions = [
  {
    question:
      "Where is the best place to link your javascript code in an html file?",
    choices: [
      "Anywhere within the document.",
      "Within a 'div' inside the main tag.",
      "You can link it within your header tag in the file.",
      "Near the end off the </body> closing tag.",
    ],
    answer: "Near the end off the </body> closing tag.",
  },
  {
    question:
      "Which one these header tags is not technically a correct tag element?",
    choices: ["<h3></h3>", "<h5></h5>", "<h9></h9>", "<h1>"],
    answer: "<h9></h9>",
  },
  {
    question:
      "Out of all of the following structures, which one would create a new element?",
    choices: [
      "var fakeVariable = createElement.document('p');",
      "var fakeVariable = function(createElement('<p>'));",
      "var fakeVariable = $('<p>');",
      "var fakeVariable = document.html.CreateElement.new('<p>');",
    ],
    answer: "var fakeVariable = $('<p>');",
  },
];

// event listeners

startBtn.addEventListener("click", startQuiz);
