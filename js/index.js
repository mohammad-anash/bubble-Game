const ScoreEl = document.querySelector(".Score");
const WrongEl = document.querySelector(".Wrong");
const boxEl = document.querySelector(".box");

function randomLocationCode(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let writeCounter = 0;
let wrongCounter = 0;
const alphabets = "abcdefghijklmnopqrstuvwxyz";

function createLetterBox(char) {
  if (char !== " ") {
    const letterBox = document.createElement("div");
    letterBox.classList.add("letter-box");
    letterBox.innerText = char;

    letterBox.style.left = `${randomLocationCode(50, 500)}px`;
    const letterCheck = alphabets.includes(char.toLowerCase());

    if (letterCheck) {
      writeCounter++;
      ScoreEl.innerText = writeCounter;
    } else {
      wrongCounter++;
      WrongEl.innerText = wrongCounter;
    }

    if (wrongCounter >= 6) {
      alert("Restart Game");
      writeCounter = 0;
      wrongCounter = 0;
      ScoreEl.innerText = writeCounter;
      WrongEl.innerText = wrongCounter;
      boxEl.innerHTML = "";
    }

    setTimeout(() => {
      letterBox.remove();
    }, 3000);

    boxEl.appendChild(letterBox);
  }
}

document.addEventListener("keypress", (e) => {
  const text = e.key;
  createLetterBox(text);
});
