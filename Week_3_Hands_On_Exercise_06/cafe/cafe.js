"use strict";

const getElement = selector => document.querySelector(selector);

let total = 0;

const products = {
    espresso: { name: "Espresso", price: 2.95 },
    latte: { name: "Latte", price: 3.95 },
    cappuccino: { name: "Cappuccino", price: 3.95 },
    coffee: { name: "Coffee", price: 1.95 },
    biscotti: { name: "Biscotti", price: 1.95 },
    scone: { name: "Scone", price: 2.95 }
};

// Show the information image
const getSelectedProduct = event => {
    const image = event.currentTarget;
    image.dataset.original = image.src;
    image.src = image.id;
};

// Restore the original image
const resetProduct = event => {
    const image = event.currentTarget;
    image.src = image.dataset.original;
};

// Add item to the order
const addProduct = event => {
    event.preventDefault();

    const item = event.currentTarget.alt;
    const product = products[item];

    const option = document.createElement("option");
    option.text = product.name + " - $" + product.price.toFixed(2);

    getElement("#order").add(option);

    total += product.price;
    getElement("#total").textContent =
        "Order Total: $" + total.toFixed(2);
};

// Clear the order
const clearOrder = () => {
    getElement("#order").innerHTML = "";
    getElement("#total").textContent = "";
    total = 0;
};

// Place the order
const placeOrder = () => {
    window.location.href = "checkout.html";
};

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("#menu-list img");

    for (let image of images) {
        image.addEventListener("mouseover", getSelectedProduct);
        image.addEventListener("mouseout", resetProduct);
        image.addEventListener("click", addProduct);
    }

    getElement("#place_order").addEventListener("click", placeOrder);
    getElement("#clear_order").addEventListener("click", clearOrder);

});