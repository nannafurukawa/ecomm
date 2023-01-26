import {findProducts} from '../repositories/productRepository.js'

export async function getAllProducts() {
    const products = findProducts();
    return products;
}
