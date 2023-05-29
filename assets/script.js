const quizData = [
    {
      question: "Who invented Java Programming?",
      a: "Guido van Rossum",
      b: "James Gosling",
      c: "Dennis Ritchie",
      d: "Bjarne Stroustrup",
      correct: "b",
    },
    {
      question: "Which statement is true about Jav",
      a: "Java is a code dependent programming language",
      b: "Java is a platform-dependent programming language",
      c: "Java is a platform-independent programming language",
      d: "Java is a sequence-dependent programming language",
      correct: "d",
    },
    {
      question: "Which component is used to compile, debug and execute the Java programs?",
      a: "JRE",
      b: "JIT",
      c: "JDK",
      d: "JVM",
      correct: "c",
    },
    {
      question: "Which of the following is not a Java feature?",
      a: "Object-orientated",
      b: "Use of pointers",
      c: "Portable",
      d: "Dynamic and Extinsible",
      correct: "b",
    },
  ];

var scoreList = document.getElementById("scores");
var quiz = document.getElementById("quiz");
var answerElements = document.querySelectorAll(".answer");
var questionElement = document.getElementById("question");
var atext = document.getElementById("atext");
var btext = document.getElementById("btext");
var ctext = document.getElementById("ctext");
var dtext = document.getElementById("dtext");
var submitButton = document.getElementById("submit");
var timeLeft = 60;
var timeEl = document.querySelector('#timer');
var welcomePage = document.getElementById("welcome");
var gamePage = document.getElementById("game");
var endGame = document.getElementById("endGame")
var timerInterval;
var finalScore = document.getElementById('finalScore');
var initials = document.getElementById('initials').value;
var fScore;


var currentQuiz = 0;
var score = 0;


function viewWelcome()
{
    if(welcomePage.style.display === "none") {
        welcomePage.style.display = "block";
    }
    else {
        welcomePage.style.display = "none";
    }
}

function viewGame()
{
    if(gamePage.style.display === "none") {
        gamePage.style.display = "block";
    }
    else {
        gamePage.style.display = "none";
    }
}
function viewEndGame()
{
    if(endGame.style.display === "none") {
        endGame.style.display = "block";
    }
    else {
        endGame.style.display = "none";
    }
}

function viewScores() {
    if(scoreList.style.display === "none") {
        scoreList.style.display = "block";
    }
    else {
        scoreList.style.display = "none";
    }
}  


viewGame();
viewEndGame();
viewScores();



function listScore() {
    viewScores();
    viewWelcome();
}


var deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };

  var getSelected = () => {
    var answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };


  function startGame() {
    viewWelcome();
    viewGame();
    loadQuiz();
    timerInterval = setInterval(gameTimer, 1000);
  }

  var loadQuiz = () => {
    deselectAnswers();
    var currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    atext.innerText = currentQuizData.a;
    btext.innerText = currentQuizData.b;
    ctext.innerText = currentQuizData.c;
    dtext.innerText = currentQuizData.d;
  };
  
 

  submitButton.addEventListener("click", () => {
    var answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        score = timeLeft;
        finalScore.textContent = "Your score is: " + score;
        viewGame();
        viewEndGame();
        clearInterval(timerInterval);
      }
    }
  });



function gameTimer()
{
    timeLeft--;
    timeEl.textContent = "Time: " + timeLeft;
    
    if(timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
}

function endGame() {
    finalScore.textContent = "";
    viewGame();
    viewEndGame();
    
}

function submitScore() {
    saveScore();
    viewEndGame();
    viewScores();
}


function saveScore() {
    var savedScore = {
        initials: initials.value,
        fScore: fScore
    };
    localStorage.setItem("savedScore", JSON.stringify(savedScore));
}
loadScore();
function loadScore() {
    var loadedScore = JSON.parse(localStorage.getItem("savedScore"));

    if(loadScore !== null) {
        document.getElementById("loadInitials").innerHTML=loadedScore.initials;
        document.getElementById("loadFScore").innerHTML=loadedScore.fScore;
    }
    else return;
}

function clearScore() {
    localStorage.clear();
}