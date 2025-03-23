import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "../js/modules/alert.js";

document.addEventListener("DOMContentLoaded", () => {
    const alertInstance = new Alert();
    alertInstance.renderAlerts(); 

    const element = document.querySelector(".product-list");
    const product = new ProductData("tents");
    const productList = new ProductList("tents", product, element);
    productList.init();

    const addToCartBtn = document.getElementById("addToCart");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            alertInstance.showAlert();
        });
    } else {
        console.warn("addToCart button not found!");
    }
});
