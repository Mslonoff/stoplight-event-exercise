(function() {
let isStopOn = false;
let isSlowOn = false;
let isGoOn = false;
let stopButton = document.querySelector('#stopButton');
let stopLight = document.querySelector('#stopLight');    
let slowButton = document.querySelector('#slowButton');
let slowLight = document.querySelector('#slowLight');
let goButton = document.querySelector('#goButton');
let goLight = document.querySelector('#goLight');

stopButton.addEventListener('click', function () {
  isStopOn = !isStopOn;
      stopLight.style.backgroundColor = isStopOn ? 'red' : 'black';
    });

slowButton.addEventListener('click', function () {
  isSlowOn = !isSlowOn;
  console.log('click', 'goButton');
    slowLight.style.backgroundColor = isSlowOn ? 'yellow' : 'black';
  }
);

goButton.addEventListener('click', function () {
  isGoOn = !isGoOn;
      console.log('click', 'goButton');
      goLight.style.backgroundColor = isGoOn ? 'green' : 'black';
  });

  let enteredGoButton = true;
  goButton.addEventListener("mouseover", (event) => {
    enteredGoButton = !enteredGoButton;
    if (enteredGoButton) {
      console.log(`Enter goButton`);
    } else {
      console.log(`Left goButton`);
    }
  });
  
  // create a variable set to false representing the mouse entering the space on page where stopButton is located
  let enteredStopButton = true;
  stopButton.addEventListener("mouseover", (event) => {
    enteredStopButton = !enteredStopButton;
    if (enteredStopButton) {
      console.log(`Enter stopButton`);
    } else {
      console.log(`Left stopButton`);
    }
  });
  
  // create a variable set to false representing the mouse entering the space on page where slowButton is located
  let enteredSlowButton = true;
  slowButton.addEventListener("mouseover", (event) => {
    enteredSlowButton = !enteredSlowButton;
    if (enteredSlowButton) {
      console.log(`Enter slowButton`);
    } else {
      console.log(`Left slowButton`);
    }
  });
  
})();

// mouseTarget.addEventListener("mouseenter", (e) => {
//   mouseTarget.style.border = "5px dotted orange";
//   enterEventCount++;
//   addListItem(`This is mouseenter event ${enterEventCount}.`);
// });
// Add new DOM event listeners and handlers to log the mouse state of each button.
// If a user's mouse hovers over a button,
// create a variable set to false representing the mouse entering the space on page where goButton is located

// log "Entered <textContent> button" to the console.
// When a user's mouse stops hovering over a button, 
// goButton.addEventListener("mouseleave", (event) => {

//   console.log(`Left goButton`);
// });

// log "Left <textContent> button" to the console.
// TIP: Each event type will need a separate event listener.
