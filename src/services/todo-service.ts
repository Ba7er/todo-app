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


    public async createList(payload: ICreateList, userId: string) {
        const { listName } = payload;
        const data = await this.db.TodoList.create({
            listName,
            userId
        });
        return data;

    }

    private async AddListOfItems(listId: string, itemsList: []): Promise<object> {
        const promiseArr: object[] = [];
        itemsList.forEach((item) => {
            const { title, description } = item;
            promiseArr.push(this.db.TodoListItems.create({
                title,
                description,
                listId
            }));
        });
        return await Promise.all(promiseArr);
    }

    public async addItems(listId: string, payload: []) {
        const data = await this.AddListOfItems(listId, payload);
        return data;
    }

    public async getListBYListId(userId: string, listId: string) {
        return await this.db.sequelize.query(
            `SELECT     i.item_id,
                        i.title ,
                        i.description
             FROM       lists l
             INNER JOIN items i
                ON         l.list_id = i.list_id
             INNER JOIN users u
                ON         u.id = l.user_id
             WHERE      u.id = ${userId}
             AND l.list_id = ${listId}
             `,
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