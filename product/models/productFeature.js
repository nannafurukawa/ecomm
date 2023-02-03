import { Model, DataTypes } from "sequelize";
import client from "../src/usecase/repositories/databaseClient.js";
export class ProductFeature extends Model {

    static associate(models) {

    }
}
ProductFeature.init(
    {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        product_id: DataTypes.INTEGER,
    },
    {
        sequelize: client,
        modelName: "ProductFeature", tableName: "productFeatures"
    }
);