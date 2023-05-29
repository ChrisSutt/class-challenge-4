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



//Element Variables
var welcomePage = document.getElementById("welcome");
var gamePage = document.getElementById("game");
var endGame = document.getElementById("endGame");
var scoreList = document.getElementById("scores");

//Reactive Element Variables
var timeEl = document.querySelector('#timer');
var answerElements = document.querySelectorAll(".answer");
var questionElement = document.getElementById("question");
var atext = document.getElementById("atext");
var btext = document.getElementById("btext");
var ctext = document.getElementById("ctext");
var dtext = document.getElementById("dtext");
var submitButton = document.getElementById("submit");
var finalScore = document.getElementById("finalScore");

//Game Variables
var timeLeft = 60;
var currentQuiz = 0;
var score = 0; // Scores correct answers.
var timerInterval;
var finalTime; // Added for time scoring.

//LocalStorage Variables
var initials; //Repositioned input value to time of saving.
var fScore;
var fTime; //New

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
    if (answer === quizData[currentQuiz].correct) 
    {
      score++;
      currentQuiz++;
      refreshQuestion()
    }
    else if (answer !== quizData[currentQuiz].correct)
    {
      timeLeft -= 10;
      currentQuiz++;
      refreshQuestion();
    } 
  }
});

function refreshQuestion()
{
  if (currentQuiz < quizData.length) loadQuiz();
  else {
    finalTime = timeLeft;
    finalScore.textContent = "Your score is: " + score;
    viewGame();
    viewEndGame();
    clearInterval(timerInterval);
  }
}

function startGame()
{
  viewWelcome();
  viewGame();
  loadQuiz();
  timerInterval = setInterval(gameTimer, 1000);
}

function gameTimer()
{
    timeLeft--;
    timeEl.textContent = "Time: " + timeLeft;
    
    if(timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
}

function endGame() 
{
    finalScore.textContent = "";
    viewGame();
    viewEndGame();
}

function submitScore()
{
    saveScore();
    loadScore(); //Loads recently saved data.
    viewEndGame();
    viewScores();
}

function listScore() {
  loadScore();
  viewScores();
  viewWelcome();
}

// Data Management Functions
function saveScore() 
{
    var savedScore = {
        initials: document.getElementById("initials").value, //pull input information after input is made
        fScore: score, //Changed fScore: fScore to fScore: score
        fTime: finalTime //New
    };
    localStorage.setItem("savedScore", JSON.stringify(savedScore));
}

function loadScore() 
{
    var loadedScore = JSON.parse(localStorage.getItem("savedScore"));

    if(loadedScore !== null) { //Changed loadScore to loadedScore.
        document.getElementById("loadInitials").innerHTML = loadedScore.initials;
        document.getElementById("loadFScore").innerHTML = loadedScore.fScore;
        document.getElementById("loadTime").innerHTML = loadedScore.fTime; //New

        //Format score card
        document.getElementById("lScore").innerHTML = "Score:&nbsp"; // &nbsp adds a blank space.
        document.getElementById("lTime").innerHTML = "Time:&nbsp";
    }
    else return;
}

function clearScore() 
{
    localStorage.clear();
    // Update HTML text after clearing data
    document.getElementById("loadInitials").innerHTML = "";
    document.getElementById("loadFScore").innerHTML = "";
    document.getElementById("loadTime").innerHTML = "";

    document.getElementById("lScore").innerHTML = "";
    document.getElementById("lTime").innerHTML = "";
}

// Visibility Functions
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

// Moved all internally called functions here
viewGame();
viewEndGame();
viewScores();
loadScore();