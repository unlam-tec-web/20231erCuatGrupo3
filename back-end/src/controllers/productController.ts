import {Router} from 'express';
const {productServices} = require("../services/productServices");

const router = Router();

router.get("/", (req, res) => {

    productServices.getProducts().then((products:any) => {
        res.status(200).json(products);
    }).catch ((error:any) => {
        res.status(500).json({error: error.message});
    })
});

router.get("/search/:searchedProduct", (req, res) => {

    const searchedProduct = req.params.searchedProduct;

    productServices.searchedProducts(searchedProduct).then((products:any) => {
        res.status(200).json(products);
    }).catch((error:any) => {
        res.status(500).json({error: error.message});
    })
});

router.get("/category/:searchedCategoryType", (req, res) => {

    const searchedCategory = req.params.searchedCategoryType;

    productServices.productsByCategory(searchedCategory).then((products:any) => {
        res.status(200).json(products);
    }).catch((error:any) => {
        res.status(500).json({error: error.message});
    })
});

router.get("/:productId", (req, res) => {

    const productId = req.params.productId;

    productServices.searchById(productId).then((product:any) => {
        res.status(200).json(product);
    }).catch((error:any) => {
        res.status(500).json({error: error.message});
    })
});

export default router;