import { Model, DataTypes } from 'sequelize';
import client from '../../repositories/databaseClient.js';

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
    user_id: DataTypes.STRING
},
    { sequelize: client, modelName: 'Product' }
);