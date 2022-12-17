import { Router } from 'express';
import {getAllProducts} from './usecase/listProducts.js';
import {createProductUseCase} from './usecase/createProductUseCase.js';
export const router = new Router();

router.post('/products', function(request, response) {
    const { produto} = request.body
     createProductUseCase(produto)
        .then(saveProduct => {
            response.status(201).json(saveProduct)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});
router.get('/products', function(request,response) {
    getAllProducts()
    .then(products => {
        response.status(201).json(products)
    })
    .catch(error => {
        response.status(400).json({ status: 'error', message: error.message });
    }); 

} );