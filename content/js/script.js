let d = new Date();
var currentHours = d.getHours ( );
var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
var currentMinutes = d.getMinutes ( );
var currentSeconds = d.getSeconds ( );
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
document.body.innerHTML = "Time right now is:  " + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay