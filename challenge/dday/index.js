const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const now = new Date();

  //크리스마스 날짜 얻기 위한 코드
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);

  const dday = new Date(xmasDay - now);

  const secondsInMs = Math.floor(dday / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getClock();
setInterval(getClock, 1000);
