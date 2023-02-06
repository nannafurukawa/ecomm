import express from "express";
import router from "./product/src/routes.js";

const app = express();

app.use(express.json());

app.use(router);

export { app }