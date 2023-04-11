import { sanity } from "../sanity.js";
import { createProductListDOM } from "./render.js";

export async function getALLBrands (products) {
	const productList = products

	const query = `*[_type == 'brand'] {
		name,
		description,
		"products": *[_type == 'product' && references(^._id)] {
			name
		 }
	}`;

	const brands = await sanity.fetch(query);

	function handleBrandOptionClick(event) {
		const sortedProductsByBrand = sortByClickedBrand(event);
		renderHTML(sortedProductsByBrand);
	}

	renderHTML();

	function fillBrandDropdown(){
		const brandsDropdown = document.querySelector('.header__filter-brand');
		// brandsDropdown.innerHTML = ''
		for(const brand of brands){
			const brandOption = document.createElement('option');

			brandOption.innerText = brand.name
			

			brandsDropdown.append(brandOption);
		}
		brandsDropdown.addEventListener('change', handleBrandOptionClick);
	}

	function sortByClickedBrand(event) {
		const clickedBrand = event.currentTarget.selectedIndex-1;
		const chosenBrand = brands[clickedBrand].name
		
		return chosenBrand;
	}

	function sortProductsByBrand(brand) {
		console.log(brand)
		const productNodeList = document.querySelectorAll('.products__list-item')
		for(const [index, product] of productNodeList.entries()){
			product.classList.add('products__list-item--hidden');

			if(productList[index].brand === brand){
				product.classList.remove('products__list-item--hidden');
			}
		}
	}

	function renderHTML(products) {

		if(products){
			sortProductsByBrand(products);
		}else {
			fillBrandDropdown();
		}

	}
}