import express from 'express';
import { router } from './routes.js';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
   'db',
   'db',
   'dbpw',
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port:8083
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully With Database.');
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