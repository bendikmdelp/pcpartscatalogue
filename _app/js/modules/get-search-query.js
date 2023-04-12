export default function searchEngine(products) {
	const productList = products;

	const searchField = document.querySelector('.search__input');
	const searchButton = document.querySelector('.search__button');

	searchButton.addEventListener('click', handleSearchButtonClick)
	searchField.addEventListener('keyup', handleSearchButtonClick)

	function handleSearchButtonClick() {
		const searchValue = getSearchInputValue()
		sortProductsBySearch(searchValue)
	}

	function sortProductsBySearch(search) {
		const productNodeList = document.querySelectorAll('.products__list-item')
		for(const [index, product] of productNodeList.entries()) {
			product.classList.add('products__list-item--hidden')
			
			if(productList[index].name.toLowerCase().includes(search.toLowerCase())) {
				product.classList.remove('products__list-item--hidden')
			}
		}
	}

	function getSearchInputValue() {
		const searchValue = searchField.value;

		return searchValue;
	}
}