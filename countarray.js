"use strict";
window.addEventListener("DOMContentLoaded", arrayCount);
const givenArray = [];
let counter = -1;
function arrayCount() {
  // console.log(arrayCount);
  delay();
}
function delay() {
  // console.log(delay);
  counter++;
  if (counter < 100) {
    // show counting
    // console.log(counter);
    givenArray.unshift(counter);
    console.log(givenArray);
  }
  if (givenArray.length > 8) {
    givenArray.pop();
  }
  setTimeout(arrayCount, 1000);
}
