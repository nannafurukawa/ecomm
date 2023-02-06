import { Router } from 'express';
import { createProductUseCase } from './usecase/createProductUseCase.js';
import { listProducts } from './usecase/listProducts.js';

const router = Router();

router.post('/products', async (request, response) => {



   if (!authorizationHeader) {
    return response.status(401).json({ message: 'authentication required'})
   }

const token = authorizationHeader.split('')[1];

if(!token) {
    return response.status(400).json({ message: 'authorization header malformed'})
}
    
const tokenDecripted = decriptToken(token);


if(tokenDecripted.payload.userId) {}

const product = request.body;
    const createdProduct = await createProductUseCase(product);

    return response.status(201).json(createdProduct);
});

router.get('/products', async (request, response) => {
    const products = await listProducts();

    return response.json(products);


});

export { router };



