import { Router } from "express";
const router = Router();


router.get("/hc", (req, res) => {
    return res.status(200).json({
        message: "Todo App is Running!"
    });
});


router.post("/todo", (req, res) => {
    return res.status(200).json({
        message: "Todo List Added"
    });
});

router.get("/todo/:id", (req, res) => {
    return res.status(200).json({
        message: "Todo List Added"
    });
});

router.patch("/todo/:id", (req, res) => {
    return res.status(200).json({
        message: "Todo List Added"
    });
});

router.delete("/todo/:id", (req, res) => {
    return res.status(200).json({
        message: "Todo List Added"
    });
});
export default router;
