const playForm = document.querySelector("#random-play");
const maxInput = document.querySelector("#max-number-form input");
const guessInput = document.querySelector("#guess-number-form input");
const gameResult = document.querySelector("#js-result");

const LOST_TXT = "You lost!";
const WON_TXT = "You Won!";

function onPlayButtonClick(event) {
  event.preventDefault();

  const maxNumber = parseInt(maxInput.value, 10);
  const guessNumber = parseInt(guessInput.value, 10);
  const randomNumber = Math.ceil(Math.random() * maxNumber);

  if (maxNumber < guessNumber) {
    alert("Guess number is less than Generate max number.");
  } else {
    gameResult.innerHTML = `<p>You chose : ${guessNumber}, the machine chose : ${randomNumber}.</p><br/><strong>${
      randomNumber === guessNumber ? WON_TXT : LOST_TXT
    }</strong>`;
  }
}

playForm.addEventListener("submit", onPlayButtonClick);
