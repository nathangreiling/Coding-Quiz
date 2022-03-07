var startBtn = document.querySelector("start-btn")
var submitInitials_btn = document.querySelector("submitInitials")
var restart_btn = document.querySelector("restart")
var myQuiz = document.getElementById("quiz-box")
var timer = document.getElementById("timer")
var timeGiven = 60;
var secondsElapsed = 0;
var option = document.querySelector("option")
document.getElementById("quiz-box").style.display="none"

buttons.addEventListener("click", function (){
    startTimer();
    starting.remove("starting");
    myQuiz.style.display="block"
    showQuestions(0);
});

function startTimer() {
    timer.textContent = timeGiven;
    interval = setInterval(function(){
        secondsElapsed++;
        timer.textContent = timeGiven - secondsElapsed;

        if (timer.textContent == 0) {
            return;
        }


    }, 1000);   
}

function showQuestions(index){
    var que_text = document.getElementById("que-text");
    var option_list = document.getElementById("option-list");
    var que_tag = questions[index].question;
    var option_tag = '<div class="option"><button class ="button">'+ questions[index].options[0] + '</button></div>'
    + '<div id="option" class="option"><button class ="button">'+ questions[index].options[1] + '</button></div>'
    + '<div class="option"><button class ="button">'+ questions[index].options[2] + '</button></div>'
    + '<div class="option"><button class ="button">'+ questions[index].options[3] + '</button></div>';

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    }


let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
   ];