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
    slowLight.style.backgroundColor = isSlowOn ? 'yellow' : 'black';
  }
);

goButton.addEventListener('click', function () {
  isGoOn = !isGoOn;
      goLight.style.backgroundColor = isGoOn ? 'green' : 'black';
  });

  goButton.addEventListener("mouseenter", (event) => {
    console.log(`Enter goButton`);
  });
  
  goButton.addEventListener('mouseleave', (event) => {
    console.log(`Left goButton`);
  });
  //setup an addEventListener for "mouseenter", and "mouseleave" for all three buttons
  //using arrow functions with (event), output a console log for the condition
  //Bonus section: using original tenary operator function, create another line under with console message for "button on, and button off when clicked"
  // create a variable set to false representing the mouse entering the space on page where stopButton is located

  stopButton.addEventListener("mouseenter", (event) => {
    console.log(`Enter stopButton`);
  });
  
  stopButton.addEventListener('mouseleave', (event) => {
    console.log(`Left stopButton`);
  });

    
  // create a variable set to false representing the mouse entering the space on page where slowButton is located
  slowButton.addEventListener("mouseenter", (event) => {
    console.log(`Enter slowButton`);
  });
  
  slowButton.addEventListener('mouseleave', (event) => {
    console.log(`Left slowButton`);
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
