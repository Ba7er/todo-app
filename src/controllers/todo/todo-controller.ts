import { NextFunction, Request, Response } from "express";
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
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const { body } = req;
            const data = await this.todoService.createList(body);

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
            const { id } = req.params;
            const { body } = req;
            const data = await this.todoService.addItems(id, body);
            return res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    }

    public async getTodoList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<object> {
        try {
            const { id } = req.params;
            const data = await this.todoService.getTodoList(id);
            return res.status(200).json({ data });
        } catch (error) {
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
    ): Promise<object> {
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
