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

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //filter 함수를 사용해서 지우고 싶은 item을 제외한 새 array를 만든다.
  //내가 클릭한 li.id와 다른 toDo는 남겨두자.
  //toDo.id 타입은 number, li.id 타입은 string이므로 !== 비교 연산을 사용할 수 없다.
  //그래서 parseInt()을 사용해서 li.id를 문자열을 숫자로 바꿔준다.

  saveToDos();
}

//Todo list 추가
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //li의 id값은 Date.now()로 랜덤하게 생성해준 id값을 넣는다.
  const span = document.createElement("span");
  span.innerText = newTodo.text; //전달해주는 값이 text와 id 두 개가 있으므로 span 안에 들어갈 텍스트는 newTodo.text다.
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
  const newTodoObject = {
    //input에 입력한 toDoInput.value 값을 (이름) object로 바꿔줌
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintTodo(newTodoObject);
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
