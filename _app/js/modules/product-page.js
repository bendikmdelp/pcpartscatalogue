function createProductPage(event, products) {
	const clickedItemIndex = event.currentTarget.dataset.index;
	const productsContainer = document.querySelector('.products__list');

	productsContainer.style.display = "block"
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
	const productStock = document.createElement('p');
	const productBuyButton = document.createElement('button');
	const productRightSide = document.createElement('div');
	const avaliabilityDot = document.createElement('div');
	const dotAndStock = document.createElement('div');
	const stringPrice = products[index].price/100;
	const spacedString = addSpaces(stringPrice);
	const inStock = products[index].avaliability;

	
	productItemContainer.className = 'products__page-container';
	productName.className = 'products__page-title';
	productImage.className = 'products__page-image';
	productDescription.className = 'products__page-description';
	productTextContent.className = 'products__page-text-content';
	productPrice.className = 'products__page-price';
	productStock.className = 'products__page-stock';
	productBuyButton.className = 'products__page-buy-button';
	productRightSide.className = 'products__page-right-side';
	avaliabilityDot.className = 'products__stock-dot';
	dotAndStock.className = 'products__dot-and-stock';
	
	productName.innerText = products[index].name;
	productImage.src = products[index].image;
	productDescription.innerText = products[index].description;
	productTextContent.innerText = products[index].content;
	productPrice.innerText = `${spacedString} kr`;
	productStock.innerText = `${products[index].avaliability} items left`;
	productBuyButton.innerText = 'Buy now';
	// avaliabilityDot.innerText = 'hei';

	dotAndStock.append(
		avaliabilityDot,
		productStock
	)
	
	productRightSide.append(
		productPrice,
		dotAndStock,
		productBuyButton
	)
		
	productItemContainer.append(
		productName, 
		productDescription,
		productImage,
		productRightSide,
		productTextContent
	)

	function changeAvaliabilityColor(quantity) {
		if (quantity >= 11) {
			avaliabilityDot.style.backgroundColor = "green";
		} else if (quantity >= 1) {
			avaliabilityDot.style.backgroundColor = "#e6e60a";
		} else if (quantity == 0) {
			avaliabilityDot.style.backgroundColor = "red";
		}
	}

	changeAvaliabilityColor(inStock)

	return productItemContainer;
}



function addSpaces(string) {
	return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export {createProductPage}