
let timerInterval,
elapsedTime = 0

// Start Button 
const startButton = document.getElementById('startButton');  

startButton.addEventListener('click', (e) => {
e.preventDefault();
if(startButton.innerText=="Start"){
   startButton.innerText="Restart";
  }
if(pauseButton.innerText=="Resume"){
    pauseButton.innerText="Pause";
    pauseTimer()
   }
resetTimer();
startTimer();
fillGrid(ul, images);    
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
const images = ["r-1c-1","r-1c-2","r-1c-3","r-1c-4","r-1c-5","r-2c-1","r-2c-2","r-2c-3","r-2c-4","r-2c-5","r-3c-1","r-3c-2","r-3c-3","r-3c-4","r-3c-5","r-4c-1","r-4c-2","r-4c-3","r-4c-4","r-4c-5","r-5c-1","r-5c-2","r-5c-3","r-5c-4","empty"];

// shuffle the array
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

  const shuffle = (arr) => {
    const rndInt = randomIntFromInterval(1, 4)
    console.log(rndInt)
    if (rndInt == 4) {
    return copy = ["r-2c-1","r-2c-3","r-1c-1","r-1c-3","r-1c-4","r-3c-1","r-1c-2","r-2c-4","r-1c-5","r-2c-5","r-4c-1","r-2c-2","empty","r-4c-4","r-3c-4","r-5c-1","r-3c-2","r-3c-3","r-5c-4","r-3c-5","r-5c-2","r-4c-2","r-4c-3","r-5c-3","r-4c-5"];
    }
    else if (rndInt == 3) {
    return copy = ["r-3c-1","r-2c-1","r-2c-3","r-1c-4","r-2c-5","r-5c-1","r-4c-1","r-1c-1","r-1c-3","r-3c-4","r-1c-2","r-2c-4","r-4c-4","r-1c-5","r-3c-5","r-5c-2","r-2c-2","r-3c-3","r-5c-4","r-4c-5","r-4c-2","r-3c-2","r-4c-3","r-5c-3","empty"];
    }
    else if (rndInt == 2) {
    return copy = ["empty","r-4c-1","r-2c-1","r-2c-3","r-2c-5","r-3c-1","r-5c-1","r-1c-1","r-1c-4","r-3c-4","r-1c-2","r-2c-4","r-4c-4","r-1c-3","r-3c-5","r-5c-2","r-2c-2","r-3c-3","r-1c-5","r-5c-4","r-4c-2","r-3c-2","r-4c-3","r-5c-3","r-4c-5"];
    }
    else if (rndInt == 1) {
    return copy = ["r-3c-1","r-2c-1","r-1c-1","r-2c-3","r-2c-5","r-5c-1","r-4c-1","r-4c-4","r-1c-4","r-3c-4","r-5c-2","r-1c-2","empty","r-1c-3","r-3c-5","r-2c-2","r-3c-2","r-2c-4","r-1c-5","r-5c-4","r-4c-2","r-4c-3","r-3c-3","r-5c-3","r-4c-5"];
    }
    else () => {
        shuffle();
    }
}

const fillGrid = (items, images) =>{
    let shuffled = shuffle(images);
    console.log(shuffled);
    items.forEach((item, i) => {
        item.className = shuffled[i];
    })
    }

// Make pieces movable
function swapTiles(piece1,piece2) {
    var temp = document.getElementById(piece1).className;
    document.getElementById(piece1).className = document.getElementById(piece2).className;
    document.getElementById(piece2).className = temp;
    isFinished();
  }

function switchPiece(row,column) {
    var Piece = document.getElementById("Piece"+row+column);
    var tile = Piece.className;
    if (tile!="empty") { 
         //Checking if white tile on the right
         if (column<5) {
           if ( document.getElementById("Piece"+row+(column+1)).className=="empty") {
             swapTiles("Piece"+row+column,"Piece"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("Piece"+row+(column-1)).className=="empty") {
             swapTiles("Piece"+row+column,"Piece"+row+(column-1));
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("Piece"+(row-1)+column).className=="empty") {
             swapTiles("Piece"+row+column,"Piece"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<5) {
           if ( document.getElementById("Piece"+(row+1)+column).className=="empty") {
             swapTiles("Piece"+row+column,"Piece"+(row+1)+column);
             return;
           }
         } 
    }
    
  }

  // Winning the game
  function isFinished() {
    const currentPieces = document.querySelectorAll('li');
    const currentClassesOrder = [... currentPieces].map((p)=> p.className);
    if(
        images.toString() == currentClassesOrder.toString()
    ){
       showModal();
       pauseTimer();
      }
}

const showModal = () => {
    getFinalTime();
    document.getElementById('message').innerText = "Yahoo you did it!"
    document.getElementById('time').innerText = `${timeMessage}`;
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}

function getFinalTime(){
    let diffInMin = elapsedTime/60000;
    let mins = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mins) * 60;
    let secs = diffInSec.toFixed(1);
    if(mins > 1) {
        timeMessage = `${mins} minute and ${secs} seconds`;
    } else if(mins > 0) {
        timeMessage = `${mins} minutes and ${secs} seconds`;
    } else {
        timeMessage = `${secs} seconds`;
    }
    return timeMessage;
}
