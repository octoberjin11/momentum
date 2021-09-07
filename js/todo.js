const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
