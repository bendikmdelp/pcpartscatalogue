import { sanity } from "../sanity.js";
import { createProductListDOM } from "./render.js";

export async function getALLCategories (products) {
	const productList = products

	const query = `*[_type == 'category'] {
		name
	 }`;

	const params = {

	};

	const categories = await sanity.fetch(query);

	function handleCategoryOptionClick(event) {
		const sortedProductsByCategory = sortByClickedBrand(event);
		renderHTML(sortedProductsByCategory);
	}

	renderHTML();

	function fillCategoryDropdown(){
		const categoryDropdown = document.querySelector('.header__filter-category');
		// brandsDropdown.innerHTML = ''
		for(const category of categories){
			const categoryOption = document.createElement('option');

			categoryOption.innerText = category.name
			

			categoryDropdown.append(categoryOption);
		}
		categoryDropdown.addEventListener('change', handleCategoryOptionClick);
	}

	function sortByClickedBrand(event) {
		const clickedCategory = event.currentTarget.selectedIndex-1;
		const sortedProducts = productList.filter(product => product.category === categories[clickedCategory].name)
		
		return sortedProducts;
	}

	function renderHTML(products) {

		if(products){
			createProductListDOM(products);
		}else {
			fillCategoryDropdown();
		}

	}

}