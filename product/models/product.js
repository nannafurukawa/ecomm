import { Model, DataTypes } from "sequelize";
import client from "../src/usecase/repositories/databaseClient.js";
import { ProductFeature } from "../models/productFeature.js";
import { ProductImage } from "../models/productImage.js";

export class Product extends Model {

    static associate(models) {

    }
}

Product.init(
    {
        name: DataTypes.STRING,
        value: DataTypes.DECIMAL,
        quantity: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        category: DataTypes.STRING,
        user_id: DataTypes.STRING,
    },
    { sequelize: client, modelName: "Product", tableName: "products" }
);

Product.ProductImage = Product.hasMany(ProductImage, {
    foreignKey: 'product_id',
    as: 'images'
});

Product.ProductFeature = Product.hasMany(ProductFeature, {
    foreignKey: 'product_id',
    as: 'features'

});

ProductImage.belongsTo(Product, {
    foreignKey: 'id',
});

ProductFeature.belongsTo(Product, {
    foreignKey: 'id',
});