import { Router } from "express";
const router = Router();


router.get("/hc", (req, res) => {
    return res.status(200).json({
        message: "Todo App is Running!"
    });
});

// Display a list of TODO items
router.get("/todo/:id", (req, res) => {
    return res.status(200).json({
        message: "list of items in a list"
    });
});

// Add todo list
router.post("/todo", (req, res) => {
    return res.status(200).json({
        message: "Todo List Added"
    });
});

// Add items to list
router.post("/todo/id", (req, res) => {
    return res.status(200).json({
        message: "Items  added to List"
    });
});

//Delete items in a list 
router.delete("/todo/:id/item/:id", (req, res) => {
    return res.status(200).json({
        message: "Item delete"
    });
});

//Edit items in list 
router.patch("/todo/:id/item/:id", (req, res) => {
    return res.status(200).json({
        message: "Item updated"
    });
});







export default router;
