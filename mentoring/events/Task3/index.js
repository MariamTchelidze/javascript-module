const modalBtn = document.getElementById("openModalBtn");
modalBtn.addEventListener("click", function (event) {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalWindow = document.querySelector(".modal");

  if (!modalBtn) return;

  modalOverlay.classList.add("open");

  const closeBtn = document.getElementById("closeModalBtn");
  closeBtn.addEventListener("click", function (event) {
    modalOverlay.classList.remove("open");
  });

  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove("open");
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      //   console.log("I am working");
      modalOverlay.classList.remove("open");
    }
  });
});
