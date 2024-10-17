let todos = [];

function updateTodoList() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    const span = document.createElement("span");
    span.textContent = todo.text;

    const span1 = document.createElement("span");
    span1.className = "d-flex gap-3 justify-content-between align-items-center";

    const editButton = document.createElement("button");
    editButton.className = "btn btn-primary btn-sm ml-2";
    editButton.id = "edit";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", () => editTodo(todo.id));

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm ml-2";
    editButton.id = "delete";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("dom", () => deleteTodo(todo.id));

    span1.appendChild(editButton);
    span1.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(span1);
    ul.appendChild(li);
  });

  saveLocal();
}

function addTodo() {
  const input = document.getElementsByTagName("input")[0].value;
  if (input.trim() === "") return;

  const newTodo = {
    id: Date.now(),
    text: input,
  };

  todos.push(newTodo);
  document.getElementsByTagName("input")[0].value = "";
  updateTodoList();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  updateTodoList();
}

function editTodo(id) {
  const currentTodo = todos.find((todo) => todo.id === id);
  const changed = prompt("New Todo: ", currentTodo.text);
  if (changed !== null && changed.trim() !== "") {
    const isTrue = confirm(
      "You wanna change your todo from " + currentTodo.text + " to " + changed
    );
    isTrue ? (currentTodo.text = changed.trim()) : currentTodo.text;
    updateTodoList();
  }
}

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", addTodo);

function saveLocal() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

updateTodoList();
