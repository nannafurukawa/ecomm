import { saveProduct } from "../usecase/repositories/productRepository.js";

export async function createProductUseCase(produto) {
    const savedProduct = await saveProduct(produto);
    return await savedProduct;
}