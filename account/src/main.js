
import express, { json } from 'express';
import { router } from './routes.js';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import apiDocs  from '../api-docs.json' assert { type: "json" };


const port = 3001;
const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

app.listen(port, () => {
  console.log(`Account app listening on port ${port}`)
});

