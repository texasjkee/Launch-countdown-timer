const DAYS = document.querySelector(".days");
const HOURS = document.querySelector(".hours");
const MINUTES = document.querySelector(".minutes");
const SECONDS = document.querySelector(".seconds");

let days = null;
let hours = 24;
let minutes = 60;
let seconds = 2;

const getDate = () => {
  if (seconds) {
    console.log("getDate ~ seconds:", seconds);
    SECONDS.textContent = seconds--;
    console.log("getDate ~ seconds:", seconds);
  } else if (seconds === 0) {
    SECONDS.textContent = 0;
    MINUTES.textContent = minutes--;
  }
};

getDate();

// if (ten === 0) clearInterval()

setInterval(() => {
  getDate();
}, 1000);
