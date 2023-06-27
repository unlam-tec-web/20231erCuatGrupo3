import {Router} from 'express';
import expressAsyncHandler from "express-async-handler";
const { categoryServices } = require ("../services/categoryServices")


const router = Router();

router.get("/",expressAsyncHandler(
    async  (req, res) => {

        res.send(await categoryServices.getCategories());
    }
));

export default router;