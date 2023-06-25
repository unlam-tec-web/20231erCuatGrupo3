import {categories, products} from "../pretend-products";
import {Router} from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.send(products);
});

router.get("/search/:searchedProduct", (req, res) => {
    const searchedProduct = req.params.searchedProduct;
    const product = products
        .filter((product) =>
            product.name.toLowerCase().includes(searchedProduct.toLowerCase())
        )
        .slice(0, 5);

    res.send(product);
});

router.get("/category/:searchedCategoryId", (req, res) => {
    const searchedCategoryId = req.params.searchedCategoryId;
    const product = products.filter((p) => p.category == searchedCategoryId);

    res.send(product);
});

router.get("/:productId", (req, res) => {
    const productId = req.params.productId;
    const product = products.find((p) => p.id == productId);

    res.send(product);
});

export default router;