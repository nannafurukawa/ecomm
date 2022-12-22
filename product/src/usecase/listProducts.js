import {findProduct} from '../repositories/productRepository.js'

export async function getAllProducts() {
    const products = findProduct();
    return products;
}
