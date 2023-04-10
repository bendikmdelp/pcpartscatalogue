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
		console.log(sortedProductsByBrand)
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
		const sortedProducts = productList.filter(product => product.brand === brands[clickedBrand].name)
		
		return sortedProducts;
	}

	function renderHTML(products) {

		if(products){
			createProductListDOM(products);
		}else {
			fillBrandDropdown();
		}

	}
}