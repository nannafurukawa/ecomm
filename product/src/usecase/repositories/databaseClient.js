import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://nanna:123456@localhost:3307/ecomm');
export default client;
