import { getALLBrands } from "./modules/get-brands.js";
import { getAllProducts } from "./modules/get-products.js";

const products = getAllProducts();
getALLBrands(products);