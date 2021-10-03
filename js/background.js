const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const bodyWrap = document.querySelector("#wrap");
const chosenImage = images[Math.floor(Math.random() * images.length)];

//createElement()을 사용하여 이미지 태그 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bodyWrap.style.backgroundImage = `url(${bgImage.src})`;
