const {ProductModel} = require("../models/product-model")

const getProducts =  () => {
    return ProductModel.find();
}

const searchedProducts = (searchedProduct) => {
    const searchRegex = new RegExp(searchedProduct, 'i')
    return ProductModel.find({name: {$regex:searchRegex}});
}

const productsByCategory = (searchedCategory) => {
    return ProductModel.find({type:searchedCategory});
}

const searchById = (productId) => {
    return ProductModel.findById(productId);
}

const productRepository = { getProducts,searchedProducts,productsByCategory,searchById };

module.exports = { productRepository };