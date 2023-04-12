import { getALLBrands } from "./modules/get-brands.js";
import { getALLCategories } from "./modules/get-categories.js";
import { getAllProducts } from "./modules/get-products.js";
import searchEngine from "./modules/get-search-query.js";

const products = await getAllProducts();
getALLBrands(products);
getALLCategories(products);
searchEngine(products);