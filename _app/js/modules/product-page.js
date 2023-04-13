function createProductPage(event, products) {
	const clickedItemIndex = event.currentTarget.dataset.index;
	const productsContainer = document.querySelector('.products__list');

	productsContainer.innerHTML = ''

	const productItem = createProductItemHTMLDOM(clickedItemIndex, products);

	productsContainer.append(productItem);

}

function createProductItemHTMLDOM(index, products) {
	const productItemContainer = document.createElement('div');
	const productName = document.createElement('h5');
	const productImage = document.createElement('img');
	const productDescription = document.createElement('p');
	const productTextContent = document.createElement('p');
	const productPrice = document.createElement('p');

	productItemContainer.className = 'products__page-container';
	productName.className = 'products__page-title';
	productImage.className = 'products__page-image';
	productDescription.className = 'products__page-description';
	productTextContent.className = 'products__page-text-content';
	productPrice.className = 'products__page-price';

	productName.innerText = products[index].name;
	productImage.src = products[index].image;
	productDescription.innerText = products[index].description;
	productTextContent.innerText = products[index].content;
	productPrice.innerText = products[index].price;

	productItemContainer.append(
		productName, 
		productImage,
		productDescription,
		productTextContent,
		productPrice)

	return productItemContainer;
}

export {createProductPage}