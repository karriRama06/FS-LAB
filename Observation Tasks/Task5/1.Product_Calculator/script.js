const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const total = document.getElementById("total");
const error = document.getElementById("error");

function calculateTotal() {

    const quantityValue = Number(quantity.value);
    const priceValue = Number(price.value);

    if (quantityValue < 0 || priceValue < 0) {
        error.textContent = "Quantity and price cannot be negative.";
        total.textContent = "0.00";
        return;
    }

    if (quantity.value === "" || price.value === "") {
        error.textContent = "";
        total.textContent = "0.00";
        return;
    }

    const totalPrice = quantityValue * priceValue;

    total.textContent = totalPrice.toFixed(2);
    error.textContent = "";
}

quantity.addEventListener("input", calculateTotal);
price.addEventListener("input", calculateTotal);