import express from 'express';

import { router } from './routes.js';
const port = 4000;
const app = express();
app.use(express.json());
app.use(router);

app.listen(port, function () {
    console.log(`Servidor escutando em http://localhost:${port}`);
});