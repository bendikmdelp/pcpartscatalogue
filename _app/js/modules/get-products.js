import {sanity} from "../sanity.js";

export async function getAllProducts() {
	const query = `*[_type == 'product']`;

	const params = {

	};

	const products = await sanity.fetch(query);

	console.log(products)

	//return products
}