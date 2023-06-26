import {category} from "../pretend-products";
import {Router} from 'express';
import expressAsyncHandler from "express-async-handler";
import {CategoryModel} from "../models/category-model";


const router = Router();

router.get("/seed", expressAsyncHandler(
    async(req, res) => {
        const categoryCount = await CategoryModel.countDocuments();
        if(categoryCount > 0){
            res.send("Seed Is Done there is= " + categoryCount + " categories.");
            return;
        }
        await CategoryModel.create(category);
        res.send("Jobs Done");
    }
));

router.get("/",expressAsyncHandler(
    async  (req, res) => {
        const categories = await CategoryModel.find()
        res.send(categories);
    }
));

router.get("/", (req, res) => {
    res.send(category);
});
export default router;