const productItems = document.querySelector(".products");

const searchInput = document.getElementById("searchInput");
const productItem = document.querySelectorAll(".product");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  productItem.forEach((product) => {
    const productName = product.textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
});
