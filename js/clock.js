const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //padStart, padEnd 앞에는 string이어야함.
  //date.getHours(), date.getMinutes(), date.getSeconds() 는 string이 아니라 number라서 String()으로 감싸서 string으로 변환해줌.

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
