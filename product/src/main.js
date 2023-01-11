import express from 'express';
import cors from 'cors';
import swaggerExpress from 'express-swagger-ui';
import swaggerDocs from '../api-docs.json' assert {type: 'json'};

import { router } from './routes.js';

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors())
app.use ('/api-docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs));
app.use(router);

app.listen(port, function () {
    console.log(`Servidor escutando em http://localhost:${port}`);
});