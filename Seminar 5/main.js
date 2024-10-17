let todos = [
  {
    id: Date.now(),
    text: "jump",
  },
  {
    id: Date.now() + 1,
    text: "run",
  },
  {
    id: Date.now() + 2,
    text: "walk",
  },
];

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

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm ml-2";
    editButton.id = "delete";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    span1.appendChild(editButton);
    span1.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(span1);
    ul.appendChild(li);
  });
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

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", addTodo);

updateTodoList();
