import { DB, } from "../models/index";
import { QueryTypes } from "sequelize";

interface ICreateList {
    listName: string;
}

interface ICreateItemList {
    title: string;
    description: string;
}
export class TodoService {

    public constructor(private db: DB) {
        this.createList = this.createList.bind(this);
        this.addItems = this.addItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }


    public async createList(payload: ICreateList) {
        const { listName } = payload;
        const data = await this.db.TodoList.create({
            listName,
        });
        return data;

    }

    public async addItems(id: string, payload: ICreateItemList) {
        const { title, description } = payload;
        const data = await this.db.TodoListItems.create({
            title,
            description,
            listId: id
        });
        return data;
    }

    public async getTodoList(id: string) {
        return await this.db.sequelize.query(
            `SELECT     i.item_id,
                        i.title ,
                        i.description
             FROM       lists l
             INNER JOIN items i
                ON         l.list_id = i.list_id
             WHERE      l.list_id = ${id}`,
            { type: QueryTypes.SELECT });
    }

    public async deleteItem(listId: string, itemId: string) {
        return await this.db.TodoListItems.destroy({
            where: {
                listId,
                itemId
            }
        });
    }

    public async editItem(listId: string, itemId: string, payload: ICreateItemList) {
        return await this.db.TodoListItems.update({ ...payload }, {
            where: {
                listId,
                itemId
            }
        });
    }
}