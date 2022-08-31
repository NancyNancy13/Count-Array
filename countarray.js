"use strict";
window.addEventListener("DOMContentLoaded", arrayCount);
const givenArray = [];
let counter = 0;
function arrayCount() {
  console.log(arrayCount);
  counter++;

  delay();
}
function delay() {
  console.log(delay);
  if (counter <= 9) {
    // show counting
    console.log(counter);
    givenArray.splice(0, 0, counter);
    console.log(givenArray);
    setTimeout(arrayCount, 1000);
  } else {
    stop();
  }
}
function stop() {
  console.log("counting goes on");
}
