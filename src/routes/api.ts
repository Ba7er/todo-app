import { Router } from "express";
import { TodoController } from "../controllers/todo/todo-controller";


const router = Router();
const todoController = new TodoController();


router.get("/hc", (req, res) => {
    return res.status(200).json({
        message: "Todo App is Running!"
    });
});

// Display a list of TODO items
// router.get("/todo/:id", todoController.getTodoList);

// Add todo list
router.post("/todo", todoController.addTodoList);

// Add items to list
// router.post("/todo/:id", todoController.AddItemsToList);

//Delete items from a list 
// router.delete("/todo/:id/item/:id", todoController.deleteItems);

//Edit items in list 
// router.patch("/todo/:id/item/:id", todoController.editItems);







export default router;
