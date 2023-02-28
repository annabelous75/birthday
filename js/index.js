function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;
const refs = {
  start: document.querySelector("button"),
};
refs.start.addEventListener("click", () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.background = color;
  }, 3000);
  refs.start.disabled = true;
});
