import {Router} from "express";

const router = Router();

router.get("/log", (req, res) => {
    const  cart  = req.body;
    console.log("A" + cart );
    res.status(200).json(cart);
});

export default router;