import {findProduct} from '../repositories/productRepository.js'

export async function getAllProducts() {
    let products = findProduct();
    return products;
}
