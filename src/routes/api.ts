import { Router } from "express";
const router = Router();


router.get("/hc", (req, res) => {

    return res.status(200).json({
        message: "Todo App is Running!"
    });
});

export default router;
