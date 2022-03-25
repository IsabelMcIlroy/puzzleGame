
// Start Button 

const startButton = document.getElementById('startButton');  

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(startButton.innerText=="Start"){
       startButton.innerText="Restart";
      }    
})

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
