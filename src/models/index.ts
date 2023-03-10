import { Sequelize } from "sequelize";
import { TodoListFactory, TodoListStatic } from "./todo-list";
import { TodoListItemsFactory, TodoListItemsStatic } from "./todo-items";
import { UserFactory, UserStatic } from "./users";


export interface DB {
    sequelize: Sequelize;
    TodoList: TodoListStatic;
    TodoListItems: TodoListItemsStatic;
    User: UserStatic;
}

const sequelize = new Sequelize("sqlite::memory:");

const TodoList = TodoListFactory(sequelize);
const TodoListItems = TodoListItemsFactory(sequelize);
const User = UserFactory(sequelize);

User.hasMany(TodoList, { foreignKey: 'user_id' });
TodoList.hasMany(TodoListItems, { foreignKey: 'list_id' });

export const db: DB = {
    sequelize,
    TodoList,
    TodoListItems,
    User
};