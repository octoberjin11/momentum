const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const body = document.body;
const colorBtn = document.querySelector("#color-btn");

function randomBg() {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  if (randomColor1 === randomColor2) {
    //선택된 두 가지 색상이 겹치는 것을 방지하기 위한 코드
    //재귀 함수 : 함수 내부에 자기 자신을 호출하는 함수
    return randomBg();
  }

  body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
}

colorBtn.addEventListener("click", randomBg);
