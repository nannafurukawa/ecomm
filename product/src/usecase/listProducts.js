import { findProducts } from "../repositories/productRepository.js"

export async function getAllProducts() {
    let products = findProducts.findProducts();
    return products;
}
