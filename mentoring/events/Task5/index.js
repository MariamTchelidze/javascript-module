const message = document.getElementById("shortcutMessage");
const body = document.body;

document.addEventListener("keydown", function (event) {
  console.log("Key:", event.key);
  console.log("Code:", event.code);

  if (event.key === "Escape") {
    message.classList.add("hidden");
  }

  if (event.key === "Enter") {
    message.classList.remove("hidden");
  }

  if (event.code === "Space") {
    body.classList.toggle("dark");
  }
});
