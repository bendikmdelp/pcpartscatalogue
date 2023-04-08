import {sanity} from "../sanity.js";

export async function getAllProducts() {
	const query = `*[_type == 'product'] {
		name,
    price,
  "image": image.asset-> url,
  "brand": brand->name
	}`;

	const params = {

	};

	const products = await sanity.fetch(query);

	renderHTML();

	function renderHTML() {
		const productsContainer = document.querySelector('.products__list');

		for(const product of products) {
			const productItem = createProductItemDOM(product);

			productsContainer.append(productItem);
		}
	}

	function createProductItemDOM(product) {
		const productItem = document.createElement('div');
		const productImage = document.createElement('img');
		const productTitle = document.createElement('p');
		const productPrice = document.createElement('p');

		productItem.className = 'products__list-item';
		productImage.className = 'products__list-item-image';
		productTitle.className = 'products__list-item-title';
		productPrice.className = 'products__list-item-price';

		productImage.src=product.image;
		productTitle.innerText = product.name;
		productPrice.innerText = product.price;

		productItem.append(productImage, productTitle, productPrice);

		return productItem;
	}

	return products
}