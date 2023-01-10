import  { Product } from '../models/products.js'
 export async function saveProduct(product) {
    const createdProduct = await Product.create(product);
    await createdProduct.save();
    return createdProduct;
}
export async function findProducts(){
    return [];
}