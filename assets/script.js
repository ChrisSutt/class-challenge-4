var start = document.querySelector('.start');
var timeLeft = 10;
var timeEl = document.querySelector('.timer');
var startEl = document.getElementById('start');

start.addEventListener('click', function () {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left";
        
        
        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }

        }, 1000);
        
});


