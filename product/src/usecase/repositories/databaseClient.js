import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://mysqluser:mysqlpass@localhost:3307/product');
export default client;
