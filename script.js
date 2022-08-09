// questions = [
//   "Where is the best place to link your javascript code in an html file?",
//   "True/ False - a 'div' is a semantic tag in html.",
//   "What is the proper way to close an 'anchor' tag?",
// ];

// answers = [
//   "Near the end of the </body> closing tag.",
//   "False",
//   "To close an 'anchor' tag, we would use </a>",
// ];

var quizQuestions = [
{
    question: "Where is the best place to link your javascript code in an html file?",
    answers: {
        Choice1: "Anywhere within the document."
        Choice2: "Within a 'div' inside the main tag."
        Choice3: "You can link it within your header tag in the file."
        Choice4: "Near the end off the </body> closing tag."
    },
    correctAnswer: Choice4
},
{
    question: "A 'div' is regarded as a semantic element in html"
    
    answers: {
        Choice1: "True"
        Choice2: "False"

    },
    correctAnswer: Choice2
}

];


var startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function(){
    if (Element class="start") {
        document.textContent.valueOf(".start")
    
    }
})


// startBtn.addEventListener("click", function (event) {
//   var element = event.target;

//   if (element.matches(".answerBtns")) {
//     var state = element.getAttribute("data-state");

//     if (state === "hidden") {
//       element.textContent = "";
//       element.dataset.state = "visible";
//     } else {
//       element.textContent = element.dataset.number;
//       element.setAttribute("data-state", "hidden");
//     }
//   }
// });
