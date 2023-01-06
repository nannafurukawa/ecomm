import express from 'express';
import { router } from './routes.js';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
   'db',
   'db',
   'dbpw',
    {
      host: '0.0.0.0:3006',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const port = 3001;
const app = express();
app.use(express.json());
app.use(router);

app.listen(port, function () {
    console.log(`Servidor escutando em http://localhost:${port}`);
});