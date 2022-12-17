import{produto1, produto2} from "../repositories/products.js"
const products = [produto1, produto2]

export async function saveProduct(product) {

    products.push(product)
    

}
export async function findProduct(){
    return products
}