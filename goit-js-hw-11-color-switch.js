const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
};

let timeOut = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);

function onStartClick() {
  if (timeOut === null) {
    changeColor();
  }
  return;
}

function onStopClick() {
  clearTimeout(timeOut);
  timeOut = null;
}

function changeColor() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  timeOut = setTimeout(changeColor, 1000);
}
