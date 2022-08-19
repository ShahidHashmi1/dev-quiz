var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var startBtn = document.querySelector(".startBtn");
var timerEl = document.getElementById("timer");
var homeScreen = document.getElementById("homeScreen");
var quizPlay = document.getElementById("quizPlay");
var indexQuestion = 0;
var secondsLeft = 100;
var questionTitle = document.querySelector("#question");
var questionAnswers = document.querySelector("#answerChoices");
var scoreEl = document.getElementById("score");
var newBtns = document.querySelector("button");
var score = 0;
var highScoresEl = document.querySelector("#highscores");

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function startQuiz() {
  startTimer();
  homeScreen.setAttribute("class", "hidePage");
  quizPlay.removeAttribute("class");
  timerEl.removeAttribute("class");
  scoreEl.removeAttribute("class");
  viewQuestion();
}

function viewQuestion() {
  if (indexQuestion >= quizQuestions.length) {
    gameOver();
    return;
  }
  var currentQuestionObj = quizQuestions[indexQuestion];
  questionTitle.textContent = currentQuestionObj.question;
  questionAnswers.innerHTML = "";
  for (let index = 0; index < currentQuestionObj.choices.length; index++) {
    var button = document.createElement("button");
    button.textContent = currentQuestionObj.choices[index];
    questionAnswers.appendChild(button);
    button.addEventListener("click", userAnswer, newBtns.remove());
  }
}

function userAnswer(answer) {
  var currentAnswer = quizQuestions[indexQuestion].answer;
  var correctAnswer = answer.target.innerText;
  console.log(currentAnswer);
  console.log(correctAnswer);

  if (correctAnswer === currentAnswer) {
    score++;
  } else {
    secondsLeft -= 20;
  }
  showScore();
  indexQuestion++;
  if (indexQuestion > quizQuestions.length) {
    gameOver();
  }
  viewQuestion();
}

function showScore() {
  scoreEl.textContent = "SCORE:" + score;
}

function gameOver() {
  var userInitials = prompt("Enter your initials");
  var highScores = localStorage.getItem("highscores") || "";
  var newScores = highScores + userInitials + " = " + score + ",";
  localStorage.setItem("highscores", newScores);
  window.location = "index.html";
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
  {
    question: "Which language would be best used in tandem with bootstrap?",
    choices: ["java", "javascript", "css", "html"],
    answer: "css",
  },
  {
    question: "What does html stand for?",
    choices: [
      "hypertext markup language",
      "halflife text moving language",
      "high-tech markup language",
      "hyper-text manager language",
    ],
    answer: "hypertext markup language",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "corresponding style sheet",
      "concatenating styling software",
      "cascading style sheets",
      "corresponding styling software",
    ],
    answer: "cascading style sheets",
  },
];

if (highScoresEl) {
  alert("Here are the victors!");
  var highScores = localStorage.getItem("highscores");
  // the split method creates an array at the string of ","
  // MDN link here -->
  var highScoreArray = highScores.split(",");
  highScoreArray.forEach((score) => {
    var scoreLi = document.createElement("li");
    scoreLi.textContent = score;
    highScoresEl.appendChild(scoreLi);
  });
}
if (startBtn) {
  startBtn.addEventListener("click", startQuiz);
}
