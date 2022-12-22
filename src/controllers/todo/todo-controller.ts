import { NextFunction, Request, Response } from "express";
import { CustomRequest } from "../../middlewares/auth";
import { TodoService } from "../../services/todo-service";


export class TodoController {

    public constructor(private todoService: TodoService) {
        this.addTodoList = this.addTodoList.bind(this);
        this.AddItemsToList = this.AddItemsToList.bind(this);
        this.getTodoList = this.getTodoList.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.editItems = this.editItems.bind(this);
    }

    public async addTodoList(
        req: CustomRequest,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const { body } = req;
            const { id: userId } = req.token;
            const data = await this.todoService.createList(body, userId);

            return res.status(200).json({ data });
        } catch (error) {
            next(error);
        }

    }

    public async AddItemsToList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const { listId } = req.params;
            const { body } = req;
            const data = await this.todoService.addItems(listId, body);
            return res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    }

    public async getTodoList(
        req: CustomRequest,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const { listId } = req.params;
            const { id: userId } = req.token;
            const data = await this.todoService.getListBYListId(userId, listId);
            return res.status(200).json({ data });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async deleteItems(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const { id, itemId } = req.params;
            const data = await this.todoService.deleteItem(id, itemId);
            return res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    }

    public async editItems(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const { id, itemId } = req.params;
            const { body } = req;
            const data = await this.todoService.editItem(id, itemId, body);
            return res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    }
}
