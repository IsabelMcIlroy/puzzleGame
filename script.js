
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
      shuffle();    
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
       pauseTimer()
      }
    else{
      pauseButton.innerText="Pause";
      startTimer()
      }    
})


// Pause timer
function pauseTimer() {
    clearInterval(timerInterval);
}

// Shuffle Pieces
// Select the list items
let ul = document.querySelectorAll('li');;
const images = [A, B, C, D, E, F, G, H];

// this function sets a unique id for each list item, in the form 'li0' to 'li8'
const setId = (items) => {
    for(let i=0; i < items.length; i++){
        items[i].setAttribute("id", `li${i}`)
    }
}

const fillGrid = (items, images) =>{
    items.forEach((item, i) => {
        item.innerHTML = images[i];
    })
}

fillGrid(ul, images);

// shuffle the array
const shuffle = (arr) => {
    const copy = [...arr];
    // loop over the array
    for(let i = 0; i < copy.length; i++) {
        let j = parseInt(Math.random()*copy.length);
        // swap elements at i and j
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}
