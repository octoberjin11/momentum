const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();

  const christmasTime = new Date("Dec 24,2021,00:00:00");

  const dday = christmasTime - date;

  const days = String(Math.floor(dday / 1000 / 60 / 60 / 24)).padStart(2, 0);
  const hours = String(Math.floor(dday / 1000 / 60 / 60) % 24).padStart(2, 0);
  const minutes = String(Math.floor((dday / 1000 / 60) % 60)).padStart(2, 0);
  const seconds = String(Math.floor((dday / 1000) % 60)).padStart(2, 0);

  const dDayInfo = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  clockTitle.innerText = dDayInfo;
}

getClock();
setInterval(getClock, 1000);
