import { Router } from "express";
import { TodoController } from "../controllers/todo/todo-controller";
import { TodoService } from "../services/todo-service";
import { UserController } from "../controllers/user/user-controller";
import { UserService } from "../services/user-service";

//DB
import { db } from "../models/index";

// Services
const router = Router();
const todoController = new TodoController(new TodoService(db));
const userController = new UserController(new UserService(db));


router.get("/hc", (req, res) => {
    return res.status(200).json({
        message: "Todo App is Running!"
    });
});

// Display a list of TODO items
router.get("/todo/:id", todoController.getTodoList);

// Add todo list
router.post("/todo", todoController.addTodoList);

// Add items to list
router.post("/todo/:id", todoController.AddItemsToList);

//Delete items from a list 
router.delete("/todo/:id/item/:itemId", todoController.deleteItems);

//Edit items in list 
router.patch("/todo/:id/item/:itemId", todoController.editItems);



// User Enpoints
router.post("/users", userController.register);
router.post("/users/login", userController.login);




export default router;
