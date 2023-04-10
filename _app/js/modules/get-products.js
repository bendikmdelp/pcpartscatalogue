import {sanity} from "../sanity.js";
import { createProductListDOM } from "./render.js";

export async function getAllProducts() {
	const query = `*[_type == 'product'] {
		name,
    price,
  "image": image.asset-> url,
  "brand": brand->name,
  "category": category->name
	}`;

	const params = {

	};

	const products = await sanity.fetch(query);

	renderHTML();

	function renderHTML() {
		createProductListDOM(products)
	}

	return products
}