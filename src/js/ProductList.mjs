import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        // You passed in this information to make the class as reusable as possible.
        // Being able to define these things when you use the class will make it very flexible
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        // the dataSource will return a Promise...so you can use await to resolve it.
        const list = await this.dataSource.getData();
        // next, render the list – ** future **
        this.renderList(list);
    }
    sortProduct(list){
        return list.sort((a,b) => {
         const nameComparison = a.Name.localeCompare(b.Name);
         if(nameComparison !== 0) return nameComparison;
         return a.FinalPrice - b.FinalPrice;
        })
    }

    renderList(list) {
        const sortedList = this.sortProduct(list);
        renderListWithTemplate(productCardTemplate, this.listElement, sortedList);
    }
}