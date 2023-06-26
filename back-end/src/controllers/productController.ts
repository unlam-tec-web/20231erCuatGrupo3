import {product} from "../pretend-products";
import {Router} from 'express';
import expressAsyncHandler from "express-async-handler";
import {ProductModel} from "../models/product-model";
const {productServices} = require("../services/productServices");
import {parse, stringify, toJSON, fromJSON} from 'flatted';

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
    async (req, res) => {

        res.send(await productServices.getProducts());
    }
    ));
/*

router.get("/",
    (req, res) => {
    productServices.getProducts().then(products => {
        res.status(200).json(products);
    }).catch (error => {
        res.status(500).json({error: error.message});
    })
}
); */

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