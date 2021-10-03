const API_KEY = "b6d5aaeed43a9634960372dbc4f04d18";

function onGeoOk(position) {
  //위치를 얻는 데 성공했을 때
  //sucess 함수는 GeolocationPosition object 하나를 파라미터로 입력 받는다.
  //console.log(position);

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  //fetch()를 사용해서 url을 불러온다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather .weather_info");
      const city = document.querySelector("#weather .location");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}℃`;
    });
}

function onGeoError() {
  //위치를 얻는 데 실패했을 때
  alert("Can't find you. No weather for you.");
}

//user의 위치(geolocation)을 준다. 이걸 부르면 브라우저에 위치 좌표를 준다. WiFi, 위치, GPS 등등...
//getCurrentPosition(모든 게 잘 됐을 때 싷행 될 함수, 에러가 발생했을 때 실행 될 함수);
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
