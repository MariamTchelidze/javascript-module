let totalScore = 20;
let highScore = 0;
let guessNum = randomNum();

const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScoreEl = document.querySelector(".highScore");
const numberInput = document.querySelector(".guess");
const checkResult = document.querySelector(".check");
const tryAgain = document.querySelector(".again");
const DisplayGuess = document.querySelector(".number");
const bodyTag = document.querySelector("body");

// ნუმბერ რანდომიზერ
function randomNum() {
  return Math.floor(Math.random() * 20) + 1;
}

// message
function displayMessage(notification) {
  message.textContent = notification;
}

checkResult.addEventListener("click", function () {
  const attempt = Number(numberInput.value);

  if (attempt < 1 || attempt > 20) {
    displayMessage("⛔ Please Enter number between 1 - 20");
  } else if (attempt === guessNum) {
    displayMessage("🎉 Correct Number!");
    DisplayGuess.textContent = guessNum;

    bodyTag.style.backgroundColor = "#60b347";
    DisplayGuess.style.width = "30rem";

    if (totalScore > highScore) {
      highScore = totalScore;
      highScoreEl.textContent = highScore;
    }

    checkResult.disabled = true;
    numberInput.disabled = true;
  } else {
    if (totalScore > 1) {
      totalScore--;
      score.textContent = totalScore;

      if (attempt > guessNum) {
        displayMessage("📈 Too high!");
      } else {
        displayMessage("📉 Too low!");
      }
    } else {
      displayMessage("💥 You lost the game!");

      bodyTag.style.backgroundColor = "#EE4B2B";

      totalScore = 0;
      score.textContent = totalScore;

      checkResult.disabled = true;
      numberInput.disabled = true;
    }
  }
});

tryAgain.addEventListener("click", function () {
  totalScore = 20;
  guessNum = randomNum();

  score.textContent = totalScore;
  displayMessage("Start guessing...");

  DisplayGuess.textContent = "?";
  numberInput.value = "";

  bodyTag.style.backgroundColor = "#222";
  DisplayGuess.style.width = "15rem";

  checkResult.disabled = false;
  numberInput.disabled = false;
});
