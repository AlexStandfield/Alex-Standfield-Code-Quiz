// Timer
let timeleft = 75;

let downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        rightOrWrong.textContent = 'Times Up!'
        finishQuizBox.style.display = 'flex';
    }
    timer.textContent = 0 + timeleft;
    timeleft -= 1;
}, 1000);

let getQuestions = function () {
    if (i <=4) {
        question.textContent = questionsArr[i].question
        answer1.textContent = questionsArr[i].correctAnswer
        answer2.textContent = questionsArr[i].a1
        answer3.textContent = questionsArr[i].a2
        answer4.textContent = questionsArr[i].a3
    } else {
        finishQuizBox.style.display = 'flex';
    }
};

let answerQuestion = function () {
    if (this.textContent === questionsArr[i].correctAnswer) {
        rightOrWrong.textContent = 'Correct!'
        score++;
        localStorage.setItem("myScore", JSON.stringify(score));
        console.log(localStorage.getItem('myScore'));
        i++;
        getQuestions();
    } else {
        rightOrWrong.textContent = 'Wrong!'
        i++;
        getQuestions();
    }
};

let resetScore = function () {
    score = 0;
    i = 0;
    localStorage.setItem("myScore", JSON.stringify(score));
};

resetScore();
getQuestions();

answer1.addEventListener('click', answerQuestion);
answer2.addEventListener('click', answerQuestion);
answer3.addEventListener('click', answerQuestion);
answer4.addEventListener('click', answerQuestion);