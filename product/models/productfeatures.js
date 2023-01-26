import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/databaseClient.js';
import { Product } from './products.js';

export class ProductFeatures extends Model {
  
  static associate(models) {}
}

ProductFeatures.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  product_id: DataTypes.INTEGER
}, {
  sequelize: client,
  modelName: 'ProductFeatures',
});