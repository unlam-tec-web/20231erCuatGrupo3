import {categories, products} from "../pretend-products";
import {Router} from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.send(categories);
});
export default router;