
const products = []
export async function saveProduct(product) {
    products.push(product)
    return products
}
export async function findProduct(){
    const listProducts = products;
    return listProducts;
}