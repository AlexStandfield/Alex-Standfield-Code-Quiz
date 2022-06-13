

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