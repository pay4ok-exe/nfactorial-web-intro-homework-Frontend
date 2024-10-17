const todos = [
  {
    id: Date.now(),
    text: "jump",
  },
  {
    id: Date.now(),
    text: "run",
  },
  {
    id: Date.now(),
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
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm ml-2";
    deleteButton.textContent = "Delete";

    span1.appendChild(editButton);
    span1.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(span1);
    ul.appendChild(li);
  });
}

updateTodoList();
