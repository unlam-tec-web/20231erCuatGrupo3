import {Router} from 'express';
const { categoryServices } = require ("../services/categoryServices")

const router = Router();

router.get("/", (req, res) => {

    categoryServices.getCategories().then((categories:any) => {
        res.status(200).json(categories);
    }).catch ((error:any) => {
        res.status(500).json({error: error.message});
    })
});

export default router;