import {Router} from "express";

const router = Router();

router.post("/log", (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

export default router;