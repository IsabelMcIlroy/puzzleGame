
// Start Button 

const startButton = document.getElementById('startButton');  

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(startButton.innerText=="Start"){
       startButton.innerText="Restart";
      }   
})
