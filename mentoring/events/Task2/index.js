const faqList = document.getElementById("faqList");

faqList.addEventListener("click", function (event) {
  const questionBtn = event.target.closest(".faq-question");

  if (!questionBtn) return;

  const faqItem = questionBtn.closest(".faq-item");

  faqItem.classList.toggle("active");
});
