const {CategoryModel} = require("../models/category-model");


const getCategories =  () => {
    return CategoryModel.find();
}

const categoryRepository = { getCategories };

module.exports = { categoryRepository };