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

})();