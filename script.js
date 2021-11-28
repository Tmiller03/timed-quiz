var startbtn = document.getElementById('start');
var countdown = 30;
var questionsBox = document.getElementById('question');
var nextbtn = document.getElementById('next');
var answer

startbtn.addEventListener('click', StartQuiz);

function StartQuiz() {
    console.log('started');
    setInterval(function(){
        countdown--;

        if(countdown >= 0){
            id = document.getElementById('timer');
            id.innerHTML = countdown;
        }
    }, 1000);
    
    startbtn.classList.add('hidden');
    questionsBox.classList.remove('hidden');
    nextbtn.classList.remove('hidden');
    next()
}

function next() {

}

function answerChosen() {

}