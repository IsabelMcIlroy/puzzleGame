
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
const images = ["r-1c-1","r-1c-2","r-1c-3","r-2c-1","r-2c-2","r-2c-3","r-3c-1","r-3c-2","empty"];

const fillGrid = (items, images) =>{
    let shuffled = shuffle(images);

    items.forEach((item, i) => {
        item.className = shuffled[i];
    })
}

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

// Make pieces movable
function swapTiles(piece1,piece2) {
    var temp = document.getElementById(piece1).className;
    document.getElementById(piece1).className = document.getElementById(piece2).className;
    document.getElementById(piece2).className = temp;
  }

function switchPiece(row,column) {
    var Piece = document.getElementById("Piece"+row+column);
    var tile = Piece.className;
    if (tile!="empty") { 
         //Checking if white tile on the right
         if (column<3) {
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
         if (row<3) {
           if ( document.getElementById("Piece"+(row+1)+column).className=="empty") {
             swapTiles("Piece"+row+column,"Piece"+(row+1)+column);
             return;
           }
         } 
    }
    
  }
  
