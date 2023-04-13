import {sanity} from "../sanity.js";
import { createProductListDOM } from "./render.js";

export async function getAllProducts() {
	const query = `*[_type == 'product'] {
		name,
		  price,
		  description,
		  avaliability,
		  content,
			"image": image.asset-> url,
			"brand": brand->name,
			"category": category->name
		}`;

	const params = {

	};

	const products = await sanity.fetch(query);

	renderHTML();

	function renderHTML() {
		const newArray = createArray();
		createProductListDOM(products)
		showRandomProducts(newArray);
	}

	function createArray(array) {
		let newArray
		if(array){
			newArray = array;
		}else{
			newArray = [];
		}

		for(let index = 0; newArray.length < 6; index++) {
			const min = Math.ceil(0);
			const max = Math.floor(products.length);
		
			let randomNumber = Math.floor(Math.random() * (max-min) + min);

			if(newArray.includes(randomNumber)){
				createArray(newArray);
			}else {
				newArray.push(randomNumber)
			}

		}

		return newArray;
	}

	function showRandomProducts(array) {
		const productNodeList = document.querySelectorAll('.products__list-item')
		for(const [index, product] of productNodeList.entries()){
			product.classList.add('products__list-item--hidden');
		}

		for(const arrayItem of array) {
			productNodeList[arrayItem].classList.remove('products__list-item--hidden')
		}
	}

	return products
}