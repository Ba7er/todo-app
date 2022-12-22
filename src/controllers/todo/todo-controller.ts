import { NextFunction, Request, Response } from "express";

export class TodoController {

    public constructor() {
        this.addTodoList = this.addTodoList.bind(this);
        this.getTodoList = this.getTodoList.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.AddItemsToList = this.AddItemsToList.bind(this);
        this.editItems = this.editItems.bind(this);

    }


    public async addTodoList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {

    }

    public async getTodoList(
        req: CustomRequest,
        res: Response,
        next: NextFunction
    ): Promise<object> {

    }

    public async AddItemsToList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {


    }

    public async deleteItems(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {


    }

    public async editItems(
        req: CustomRequest,
        res: Response,
        next: NextFunction
    ): Promise<object> {

    }

}
