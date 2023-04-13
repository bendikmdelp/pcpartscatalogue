import { createProductPage } from "./product-page.js";

let productList

function createProductItemDOM(product, index) {
	const productItem = document.createElement('div');
	const productImage = document.createElement('img');
	const productTitle = document.createElement('p');
	const productPrice = document.createElement('p');
	const stringPrice = product.price/100;
	const spacedString = addSpaces(stringPrice);

	
	productItem.className = 'products__list-item';
	productImage.className = 'products__list-item-image';
	productTitle.className = 'products__list-item-title';
	productPrice.className = 'products__list-item-price';
	
	productItem.setAttribute('data-index', index)
	
	productImage.src = product.image;
	productTitle.innerText = product.name;
	productPrice.innerText = `${spacedString} kr`;
	
	productItem.append(productImage, productTitle, productPrice);
	
	productItem.addEventListener('click', handleProductCardClick);
	
	return productItem;
}

function addSpaces(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function createProductListDOM(products) {
	productList = products;
	const productsContainer = document.querySelector('.products__list');
	productsContainer.innerHTML = ''
	
		for(const [index, product] of products.entries()) {
			const productItem = createProductItemDOM(product,index);

			productsContainer.append(productItem);
		}
}

function handleProductCardClick(event) {
	createProductPage(event, productList)
}

export {createProductListDOM}