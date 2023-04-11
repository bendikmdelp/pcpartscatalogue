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
		const chosenCategory = sortByClickedCategory(event);
		renderHTML(chosenCategory);
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

	function sortByClickedCategory(event) {
		const clickedCategory = event.currentTarget.selectedIndex-1;
		const chosenCategory = categories[clickedCategory].name
		
		return chosenCategory;
	}

	function sortProductsByCategory(category) {
		const productNodeList = document.querySelectorAll('.products__list-item')
		console.log(productList);
		console.log(category)
		for(const [index, product] of productNodeList.entries()){
			product.classList.add('products__list-item--hidden');

			if(productList[index].category === category){
				product.classList.remove('products__list-item--hidden');
			}
		}
	}

	function renderHTML(chosenCategory) {

		if(chosenCategory){
			sortProductsByCategory(chosenCategory);
		}else {
			fillCategoryDropdown();
		}

	}

}