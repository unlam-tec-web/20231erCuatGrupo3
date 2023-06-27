const { categoryRepository } = require("../repositories/categoryRepository");

const getCategories = () => {
    return categoryRepository.getCategories();
}

const categoryServices = { getCategories };

module.exports = { categoryServices };