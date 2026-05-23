// generating random colors in hex-values
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// generating random numbers
// console.log(Math.floor(Math.random() * 16))

// console.log(randomColor());

// connecting this code to buttons through eventListeners
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let intervalId; //global access
const startChangingBgColor = function () {
  // Do change bgcolor after each sec
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingBgColor = function () {
  clearInterval(intervalId);
  // considering edge-cases
  intervalId = null;
};

startBtn.addEventListener("click", startChangingBgColor);
stopBtn.addEventListener("click", stopChangingBgColor);

// inserting an alert
// setTimeout(function () { }, 6000);
setTimeout(function () {
   alert("Are you enjoying changing background colors?");
}, 8000);

// const displayAlert =  function () {
//   alert("Are you enjoying changing background colors?");
// }
// setTimeout(displayAlert,8000)