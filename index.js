(function() {
  'use strict';
  var counterYellow = 0;
  var counterRed = 0;
  var counterGreen = 0;

let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');    

stopButton.addEventListener('click', function () {
      counterRed++
      let isStopOn;
      // if counter is odd
      if(counterRed % 2 === 1) {
        // light should be on
        isStopOn = true;
        // else
      } else {
        // light is turned off
        isStopOn = false;
      }
      stopLight.style.backgroundColor = isStopOn ? 'red' : 'black';
    });

let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');
// add event listener for slow button and go button that makes the light the right color

slowButton.addEventListener('click', function () {
    console.log('click', 'slowButton');
    counterYellow++
    let isSlowOn;
    // if counter is odd
    if(counterYellow % 2 === 1) {
      // light should be on
      isSlowOn = true;
      // else
    } else {
      // light is turned off
      isSlowOn = false;
    }
    slowLight.style.backgroundColor = isSlowOn ? 'yellow' : 'black';
  });

  let goButton = document.getElementById('goButton');
  let goLight = document.getElementById('goLight')
  
goButton.addEventListener('click', function () {
      console.log('click', 'goButton');
      counterGreen++
      let isGoOn;
      // if counter is odd
      if(counterGreen % 2 === 1) {
        // light should be on
        isGoOn = true;
        // else
      } else {
        // light is turned off
        isGoOn = false;
      }
      goLight.style.backgroundColor = isGoOn ? 'green' : 'black';
  });

})();