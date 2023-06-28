import {Router} from 'express';
import expressAsyncHandler from "express-async-handler";
const {productServices} = require("../services/productServices");


const router = Router();

/*
router.get("/",expressAsyncHandler(
    async (req, res) => {

        res.send(await productServices.getProducts());
    }
    ));

*/
router.get("/",
    (req, res) => {
    productServices.getProducts().then(products => {
        res.status(200).json(products);
    }).catch (error => {
        res.status(500).json({error: error.message});
    })
}
);

router.get("/search/:searchedProduct",expressAsyncHandler(
    async (req, res) => {

    const searchedProduct = req.params.searchedProduct;
    res.send(await productServices.searchedProducts(searchedProduct));
}
));

router.get("/category/:searchedCategoryType",expressAsyncHandler(
    async (req, res) => {

    const searchedCategory = req.params.searchedCategoryType;
    res.send(await productServices.productsByCategory(searchedCategory));
}
));

router.get("/:productId",expressAsyncHandler(
    async (req, res) => {

    const productId = req.params.productId;
    res.send(await productServices.searchById(productId));
}
));

export default router;