import { getALLBrands } from "./modules/get-brands.js";
import { getALLCategories } from "./modules/get-categories.js";
import { getAllProducts } from "./modules/get-products.js";

const products = await getAllProducts();
getALLBrands(products);
getALLCategories(products);