"use string";
// watch-01 start
const oclockSeconds = document.querySelector(".oclock-seconds-init");
const oclockMinutes = document.querySelector(".oclock-minutes-init");
const oclockHours = document.querySelector(".oclock-hours-init");

let dateGl = new Date();
let seconds = dateGl.getSeconds();
let minutes = Math.floor(dateGl.getMinutes() * 6);
let hours = Math.floor(dateGl.getHours() % 12);

let hoursIndicator = 30 * hours;

hoursIndicator = Math.floor(hoursIndicator + minutes / 12);

let countHours = 0;

function setFun() {
  oclockSeconds.style.transform = `rotate(${seconds}deg)`;
  oclockMinutes.style.transform = `rotate(${minutes}deg)`;
  oclockHours.style.transform = `rotate(${hoursIndicator}deg)`;
  seconds += 6;

  if (seconds >= 358 && seconds <= 362) {
    seconds = 0;
    minutes += 6;
    countHours++;

    if (countHours === 12) {
      hoursIndicator += 6;
      countHours = 0;
    }
  }

  if (minutes >= 358 && minutes <= 362) {
    minutes = 0;
  }
}
setFun();
setInterval(() => {
  setFun();
}, 1000);
// watch-01 end

// watch-02 start
const watch = document.querySelector(".watch span");

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
// watch-02 end
