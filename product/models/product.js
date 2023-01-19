import { Model, DataTypes } from "sequelize";
import client from "../../src/repositories/databaseClient.js";
import { ProductFeture } from "./productFeature.js";
import { ProductImage } from "./productImage.js.js";

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

Product.ProductFeture = Product.hasMany(ProductFeture, {
    foreignKey: 'product_id',
    as: 'fetures'

});

ProductImage.belongsTo(Product, {
    foreignKey: 'id',
});

ProductFeture.belongsTo(Product, {
    foreignKey: 'id',
});