const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//toDos array의 내용을 localStorage에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // input에 입력한 todo value를 localStorage에 저장할 때 ['a', 'b', 'c']와 같은 array의 형태로 저장하기 위해서
  // JSON.stringify()를 사용하여 string으로 바꿔서 localStorage에 넣어줌.
  // localStorage는 오직 문자열만 저장 가능. toDos array 자체를 문자열로 만들어서 localStorage에 저장.
}

//Todo list 삭제 버튼 이벤트
function deleteTodo(event) {
  const li = event.target.parentElement; //target은 클릭된 HTML element.
  li.remove();
}

//Todo list 추가
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  // JSON.parse() > string이 아닌 Javascript에서 사용 가능한 object로 만들어줌.
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
