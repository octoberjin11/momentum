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

const chosenImage = images[Math.floor(Math.random() * images.length)];

//createElement()을 사용하여 이미지 태그 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//appendChild()을 사용하여 body에 html을(위에서 생성한 이미지 태그) 추가
//appendChild()는 html 맨 뒤에 태그 추가
//prepend()는 html의 맨 위에 태그 추가
document.body.appendChild(bgImage);
