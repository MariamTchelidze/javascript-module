const board = document.querySelector(".board");
const eachTask = document.querySelectorAll(".task");
const eachColumn = document.querySelectorAll(".column");

let dragTask = null;

eachTask.forEach((task) => {
  task.addEventListener("dragstart", (event) => {
    dragTask = event.target;

    event.target.classList.add("dragging");
  });

  task.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");
  });
});

eachColumn.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    event.preventDefault();

    event.currentTarget.classList.add("drag-over");
  });

  column.addEventListener("drop", (event) => {
    event.preventDefault();

    event.currentTarget.append(dragTask);

    event.currentTarget.classList.remove("drag-over");
  });
});
