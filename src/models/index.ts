import { Sequelize } from "sequelize";
import { TodoListFactory, TodoListStatic } from "./todo-list";
import { TodoListItemsFactory, TodoListItemsStatic } from "./todo-items";


export interface DB {
    sequelize: Sequelize;
    TodoList: TodoListStatic;
    TodoListItems: TodoListItemsStatic;

}

const sequelize = new Sequelize({
    storage: ':memory:',
    dialect: 'sqlite',
});

const TodoList = TodoListFactory(sequelize);
const TodoListItems = TodoListItemsFactory(sequelize);

TodoList.hasMany(TodoListItems, { foreignKey: 'list_id' });

export const db: DB = {
    sequelize,
    TodoList,
    TodoListItems
};