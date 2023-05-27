var questions = [{
    id: 0,
    q: 'Who invented Java Programming?',
    a: [{ text: 'Guido van Rossum', isTrue: false },
       { text: 'James Gosling', isTrue: true },
       { text: 'Dennis Ritchie', isTrue: false },
       { text: 'Bjarne Stroustrup', istrue: false} ,
]
},
{
    id: 1,
    q: 'Which statement is true about java?',
    a: [{ text: 'Java is a sequence-dependent programming language', isTrue: false },
       { text: 'Java is a code dependent programming language', isTrue: false },
       { text: 'Java is a platform-dependent programming language', isTrue: false },
       { text: 'Java is a platform-independent programming language', isTrue: true },
    ]
},
{
    id: 2,
    q: 'Which component is used to compile, debug and execute the Java programs?',
    a: [{ text: 'JRE', isTrue: false },
       { text: 'JIT', isTrue: false },
       { text: 'JDK', isTrue: true },
       { text: 'JVM', isTrue: false },
     ]
},
{
    id: 3,
    q: 'Which of the following is not a Java feature?',
    a: [{ text: 'Object-orientated', isTrue: false },
       { text: 'Use of pointers', isTrue: true },
       { text: 'Potable', isTrue: false },
       { text: 'Dynamic and Extinsible', isTrue: false }, 
    ]

}
]
var start = document.querySelector('.start');
var timeLeft = 100;
var timeEl = document.querySelector('.timer');
var startEl = document.getElementById('start');

start.addEventListener('click', function () {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left";
        
        
        if(timeLeft === 0) {
            return;
        }

        }, 1000);
        
});

startEl.addEventListener('click', function () {
    startEl.remove();
});


