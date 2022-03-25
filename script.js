
let timerInterval,
elapsedTime = 0


// Start Button 

const startButton = document.getElementById('startButton');  

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(startButton.innerText=="Start"){
       startButton.innerText="Restart";
      }
      resetTimer();
      startTimer();    
})


// Start timer at beginning of game
function startTimer() {
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

// Fills timer display digits
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}


// Resets timer to 0 at beginning of game
function resetTimer(){
    clearInterval(timerInterval);
    print("00:00:000");
    elapsedTime = 0;
}

// Formats time to display properly
function timeToString(time) {
    let diffInMin = time/60000;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}`;
      
}

// Pause Button 

const pauseButton = document.getElementById('pauseButton');  

pauseButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(pauseButton.innerText=="Pause"){
       pauseButton.innerText="Resume";
      }
    else{
      pauseButton.innerText="Pause";
      }    
})
