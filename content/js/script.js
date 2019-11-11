let d = new Date();
var currentHours = d.getHours ( );
var currentMinutes = d.getMinutes ( );
var currentSeconds = d.getSeconds ( );
currentHours = ( currentHours < 10 ? "0" : "") + currentHours;
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
document.body.innerHTML = "Time right now is:  " + currentHours + ":" + currentMinutes + ":" + currentSeconds;