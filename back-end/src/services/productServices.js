const { productRepository } = require("../repositories/productRepository");

const getProducts = () => {
    return productRepository.getProducts();
}

const searchedProducts = (name) => {
    return productRepository.searchedProducts(name);
}

const productsByCategory = (searchedCategory) => {
    return productRepository.productsByCategory(searchedCategory);
}

const searchById = (id) => {
    return productRepository.searchById(id);
}

const productServices = { getProducts,searchedProducts,productsByCategory,searchById };

module.exports = { productServices };