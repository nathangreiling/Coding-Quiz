var startBtn = document.querySelector("start-btn")
var submitInitials_btn = document.querySelector("submitInitials")
var restart_btn = document.querySelector("restart")
var myQuiz = document.getElementById("quiz-box")

document.getElementById("quiz-box").style.display="none"



starting.addEventListener("click", function (){
    starting.remove("starting");
    myQuiz.style.display="block"
});

