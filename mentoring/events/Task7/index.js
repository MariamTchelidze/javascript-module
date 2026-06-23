const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const error = document.querySelector("#todoError");
const todoList = document.querySelector("#todoList");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = input.value.trim();

  if (!taskText) {
    error.textContent = "Please enter a task!";
    return;
  }

  error.textContent = "";

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>

    <button class="complete-btn">
      <span>Complete</span>
    </button>

    <button class="delete-btn">
      <span>Delete</span>
    </button>
  `;

  todoList.append(li);

  input.value = "";
});
