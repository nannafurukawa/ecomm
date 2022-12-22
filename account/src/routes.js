import { Router } from 'express';
import { createUserUseCase } from './use-case/createUserAccount.js';


export const router = new Router();

router.post('/accounts', function (request, response) {
    debugger;
    const { name, email, password } = request.body;


    createUserUseCase(name, email, password)
        .then(createdAccount => {

            response.status(201).json(createdAccount)
        })
        .catch(error => {
            response.status(500).json({ status: 'error', message: error.message + " - " + `${name} " - " ${email}" - "${password}` });
        });
});