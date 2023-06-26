import {product} from "../pretend-products";
import {Router} from 'express';
import expressAsyncHandler from "express-async-handler";
import {ProductModel} from "../models/product-model";

const router = Router();

router.get("/seed", expressAsyncHandler(
    async(req, res) => {
    const productCount = await ProductModel.countDocuments();
    if(productCount > 0){
        res.send("Seed Is Done there is= " + productCount + " Products.");
        return;
    }
    await ProductModel.create(product);
        res.send("Jobs Done");
}
));

router.get("/",expressAsyncHandler(
    async  (req, res) => {
    const products = await ProductModel.find()
    res.send(products);
}
));

router.get("/search/:searchedProduct",expressAsyncHandler(
    async (req, res) => {

    const searchedProduct = req.params.searchedProduct;
    const searchRegex = new RegExp(searchedProduct, 'i')
    const product = await ProductModel.find({name: {$regex:searchRegex}});
    res.send(product);
}
));

router.get("/category/:searchedCategoryType",expressAsyncHandler(
    async (req, res) => {

    const searchedCategory = req.params.searchedCategoryType;
    const productFound = await ProductModel.find({type:searchedCategory});

    res.send(productFound);
}
));

router.get("/:productId",expressAsyncHandler(
    async (req, res) => {

    const productId = req.params.productId;
    const productFound = await ProductModel.findById(productId);

    res.send(productFound);
}
));

export default router;