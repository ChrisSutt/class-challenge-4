var start = document.querySelector('.start');
var timeLeft = 60;
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




document.getElementByClass('btn').addEventListener("click",function(){

    var listContainer = document.getElementById("listContainer");
    var listItem = listContainer.getElementsByTagName("li");

    for (var i=0; i < listItem.length-1; i++) 
    {
        if(listItem[i].style.display == "list-item")
        {
            listItem[i].style.display = "none";
            listItem[i+1].style.display = "list-item";
            break;
        }
    }

});



var submitAnswer = function() {

    var radios = document.getElementsByName('radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
            }
    }
    
    if (val == "" ) {
        alert('please select an answer');
    } else if ( val == "James Gosling" ) {
        alert('Answer is correct !');
    } else {
        alert('Answer is wrong');
    }
    };


