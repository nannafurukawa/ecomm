import { Sequelize } from 'sequelize';
const client = new Sequelize('mysql://nanna:123456@localhost:3306/ecomm');
export default client;
