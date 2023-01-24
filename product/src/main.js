import express from 'express';
import { router } from './routes.js';

import swaggerUi from "swagger-ui-express";
import apiDocs from  "../api-docs.json" assert {type: "json"}; ;
import client from '../src/usecase/repositories/databaseClient.js';
const app = express();
app.use(express.json());
app.use(router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiDocs));
app.listen(3000, function () {
    console.log('Servidor iniciado na porta 3006');
client.authenticate()
    .then(() => {
        console.log('Db connection OK!')
    }).catch(e => {
        console.log('Db connection Error: ', e)
    })
});
