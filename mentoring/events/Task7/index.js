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
todoList.addEventListener("click", (event) => {
  const completeBtn = event.target.closest(".complete-btn");
  const deleteBtn = event.target.closest(".delete-btn");

  if (completeBtn) {
    const task = completeBtn.closest("li");
    task.classList.toggle("completed");
  }

  if (deleteBtn) {
    const task = deleteBtn.closest("li");
    task.remove();
  }
});
