
import { Product } from "../../models/products.js";
import { ProductFeatures } from "../../models/productfeatures.js";
import { ProductImages } from "../../models/productimages.js";

export async function saveProduct(product) {
    const createdProduct = await products.create(product, {
        include: [
        { association: Product.ProductFeatures, as: 'features', },
        { association: Product.ProductImages, as: 'images'}
    ]
    });
    await createdProduct.save();
    return createdProduct;
}

export async function findProducts () {
    const allProducts = await Product.findAll({ include : [
        {
            model: ProductFeatures,
            as: 'features'
        }, 
        {
            model: ProductImages,
            as: 'images'
        }
    ]
    });
    return allProducts;
}