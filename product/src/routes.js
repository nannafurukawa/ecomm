import { Router } from 'express';
import {getAllProducts} from './usecase/listProducts.js';
import {createProductUseCase} from './usecase/createProductUseCase.js';
export const router = new Router();

router.get('/product', (req, res) => {
    listProducts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).json({ status: 'Error getting product!', message: error.message });
        })
});
router.post('/product', function (req, res) {
    const product = 
    createProductUseCase(product)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ status: 'Error fetching products!', message: error.message });
        })
});