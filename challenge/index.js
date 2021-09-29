const maxNumberInput = document.querySelector("#max-number-form input");
const guessNumberInput = document.querySelector("#guess-number-form input");
const playButton = document.querySelector("#guess-number-form button");
const guessScore = document.querySelector("#guess-score");
const gameResult = document.querySelector("#game-result");

const LOST_TXT = "You lost!";
const WON_TXT = "You Won!";

function onPlayButtonClick(event) {
  event.preventDefault();

  const maxValue = maxNumberInput.value;
  const guessValue = guessNumberInput.value;
  const maxNumber = parseInt(maxValue);
  const guessNumber = parseInt(guessValue);
  const randomNumber = Math.ceil(Math.random() * maxNumber);

  if (maxValue === "") {
    alert("Please write Max number.");
    maxNumberInput.focus();
  } else if (guessValue === "") {
    alert("Please write Guess number.");
    guessNumberInput.focus();
  } else {
    if (maxNumber < 0) {
      alert("The range cannot contain negative numbers.");
    } else if (maxNumber < guessNumber) {
      alert("Guess number is less than Generate max number.");
    } else {
      guessScore.innerText = `You chose : ${guessValue}, the machine chose : ${randomNumber}.`;

      if (randomNumber === guessNumber) {
        gameResult.innerText = WON_TXT;
      } else {
        gameResult.innerText = LOST_TXT;
      }
    }
  }
}

playButton.addEventListener("click", onPlayButtonClick);
