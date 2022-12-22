import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TodoListItemsAttributes {
    itemId: string;
    title: string;
    description: string;
    listId: string;
}
export interface TodoListItemsModel extends Model<TodoListItemsAttributes>, TodoListItemsAttributes { }
export class TodoList extends Model<TodoListItemsModel, TodoListItemsAttributes> { }

export type TodoListItemsStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): TodoListItemsModel;
};

export function TodoListItemsFactory(sequelize: Sequelize) {
    return <TodoListItemsStatic>sequelize.define("items", {
        itemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        listId: {
            type: DataTypes.INTEGER,
        }
    }, { underscored: true });
}

