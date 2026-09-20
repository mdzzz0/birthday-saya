const screens = {
  welcome: document.getElementById("welcome"),
  question: document.getElementById("question"),
  letter: document.getElementById("letter")
};

const openLetter = document.getElementById("openLetter");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const buttonsArea = document.getElementById("buttonsArea");
const escapeMessage = document.getElementById("escapeMessage");

function showScreen(screen) {
  Object.values(screens).forEach(item => item.classList.remove("active"));
  screen.classList.add("active");
}

openLetter.addEventListener("click", () => {
  showScreen(screens.question);
});

yesButton.addEventListener("click", () => {
  showScreen(screens.letter);
});

let escapeCount = 0;

function moveNoButton() {
  const area = buttonsArea.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();

  const maxX = Math.max(0, area.width - button.width);
  const maxY = Math.max(0, area.height - button.height);

  noButton.style.position = "absolute";
  noButton.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noButton.style.top = `${Math.floor(Math.random() * maxY)}px`;

  escapeCount++;

  const messages = [
    "hey!! ✦",
    "not yet!",
    "try again >:)",
    "you can't escape ♡"
  ];

  escapeMessage.textContent =
    messages[Math.min(escapeCount - 1, messages.length - 1)];
}

noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("pointerdown", event => {
  event.preventDefault();
  moveNoButton();
});

window.addEventListener("resize", () => {
  noButton.style.left = "";
  noButton.style.top = "";
  noButton.style.position = "relative";
});
