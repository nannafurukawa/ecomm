import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/databaseClient.js';

export class ProductImages extends Model {
  static associate(models) {}
}

ProductImages.init({
  url: DataTypes.STRING,
  description: DataTypes.STRING,
  product_id: DataTypes.INTEGER
}, {
  sequelize: client,
  modelName: 'ProductImages',
});