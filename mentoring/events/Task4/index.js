const name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const submitBtn = document.querySelector("button");
const paragraph = document.getElementById("formStatus");
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let validation = true;
  if (name.value.trim() === "") {
    name.classList.add("invalid");
    paragraph.textContent = "name Input Can't be empty";
    paragraph.classList.remove("success");
    paragraph.classList.add("error");
    validation = false;
  } else {
    name.classList.remove("invalid");
  }

  if (email.value.includes("@")) {
    email.classList.remove("invalid");
  } else {
    email.classList.add("invalid");
    paragraph.textContent = "Email Must contain correct symbols";
    paragraph.classList.remove("success");
    paragraph.classList.add("error");
    validation = false;
  }

  if (password.value.length === 8 || password.value.length > 8) {
    password.classList.remove("invalid");
  } else {
    password.classList.add("invalid");
    paragraph.textContent = "Password should contain at least 8 letters";
    paragraph.classList.remove("success");
    paragraph.classList.add("error");
    validation = false;
  }

  if (validation) {
    paragraph.textContent = "Your form is sent";
    paragraph.classList.add("success");
    paragraph.classList.remove("error");
  }
});
