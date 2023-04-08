import { sanity } from "../sanity.js";

export async function getALLBrands (products) {
	const query = `*[_type == 'brand'] {
		name,
		description,
		"products": *[_type == 'product' && references(^._id)] {
			name
		 }
	}`;

	const brands = await sanity.fetch(query);

	console.log(brands)

	renderHTML();

	function renderHTML() {
		const brandsDropdown = document.querySelector('.header__filter-brand')
		for(const brand of brands){
			const brandOption = document.createElement('option');

			brandOption.innerText = brand.name
			

			brandsDropdown.append(brandOption);
		}
		brandsDropdown.addEventListener('change', handleBrandOptionClick);
	}

	function handleBrandOptionClick(event) {
		sortByClickedBrand(event);
	}

	function sortByClickedBrand(event) {
		const clickedBrand = event.currentTarget.selectedIndex-1;
		console.log(clickedBrand);
	}
}