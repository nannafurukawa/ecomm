import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/databaseClient.js';
import { ProductFeatures } from '../models/productfeatures.js';
import { ProductImages } from './productimages.js';
export class Product extends Model {
  static associate(models) {
  }
}

Product.init({
  name: DataTypes.STRING,
  value: DataTypes.DECIMAL,
  quantity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  user_id: DataTypes.UUID
}, 
{ sequelize: client, modelName: 'Product', }
);

Product.ProductImages = Product.hasMany(ProductImages, {
  foreignKey: 'product_id',
  as: 'images'
});

Product.ProductFeatures = Product.hasMany(ProductFeatures, {
  foreignKey: 'product_id',
  as: 'features'
});

ProductFeatures.belongsTo(Product, {
  foreignKey: 'id',
});


ProductImages.belongsTo(Product, {
  foreignKey: 'id',
});