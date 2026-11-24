let startBtn = document.querySelector("#start");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");

let secondsCounter = 0;
let minsCounter = 0;
let hoursCounter = 0;

startBtn.addEventListener("click", () => {
  setInterval(() => {
    if (secondsCounter === 60) {
      secondsCounter = 0;
      minsCounter++;
    }

    if (minsCounter === 60) {
      minsCounter = 0;
      hoursCounter++;
    }

    secondsCounter++;
    seconds.textContent = secondsCounter;
    minutes.textContent = minsCounter;
    hours.textContent = hoursCounter;
  }, 10);
});
