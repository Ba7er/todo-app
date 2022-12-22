import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TodoListAttributes {
    listId: number;
    listName: string;
    userId: string;
}
export interface TodoListModel extends Model<TodoListAttributes>, TodoListAttributes { }
export class TodoList extends Model<TodoListModel, TodoListAttributes> { }

export type TodoListStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): TodoListModel;
};

export function TodoListFactory(sequelize: Sequelize) {
    return <TodoListStatic>sequelize.define("lists", {
        listId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        listName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { underscored: true });
}

