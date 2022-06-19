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
        let answers = [ questionsArr[i].a1, questionsArr[i].a2, questionsArr[i].a3, questionsArr[i].correctAnswer]
        let shuffled = shuffle(answers);
        for(let i = 0; i <= 3; i++){
            allAnswers[i].textContent = shuffled[i]
        }
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
        timeleft = timer.textContent - 10;
        timer.textContent = timer.textContent - 10;
        clearInterval(downloadTimer);
        let t = 10;
        downloadTimer = setInterval(function(){
            if(timer.textContent <= 0){
                clearInterval(downloadTimer);
                rightOrWrong.textContent = 'Times Up!'
                finishQuizBox.style.display = 'flex';
                timer.textContent = 1;
            }
            timer.textContent -= 1;
            timeleft -= 1;
        }, 1000);
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