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
        user_id: DataTypes.UUID,
    },
    { sequelize: client, modelName: "Products" }
);

Product.ProductImage = Product.hasMany(ProductImage, {
    foreignKey: 'product_id',
    as: 'images'
});

Product.ProductFeature = Product.hasMany(ProductFeature, {
    foreignKey: 'product_id',
    as: 'fetures'

});

ProductImage.belongsTo(Product, {
    foreignKey: 'id',
});

ProductFeature.belongsTo(Product, {
    foreignKey: 'id',
});