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
var timerInterval;

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


viewGame();


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
        quiz.innerHTML = `
              <button onclick="history.go(0)">Play Again</button>
        ` 
      }
    }
  });



function highScore()



function gameTimer()
{
    timeLeft--;
    timeEl.textContent = "Time: " + timeLeft;
    
    if(timeLeft <= 0) {
        clearInterval(timerInterval);
        gameOver();
    }
}