const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minutes-hand]");
const secondHand = document.querySelector("[data-second-hand]");
setInterval(startTime, 1000);

function startTime() {
  const today = new Date();
  const second = today.getSeconds() / 60;
  const minutes = (second + today.getMinutes()) / 60;
  const hour = (minutes + today.getHours()) / 12;
  setRotation(secondHand, second);
  setRotation(minuteHand, minutes);
  setRotation(hourHand, hour);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

startTime();
