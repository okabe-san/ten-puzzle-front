let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = setInterval(function() {
  seconds++;
  if(seconds == 60) {
    seconds == 00;
    minutes++;

    if(minutes == 60) {
      minutes == 00;
      hours++;
    }
  }

  let newTime = hours + ":" + minutes + ":" + seconds;

}, 1000)
