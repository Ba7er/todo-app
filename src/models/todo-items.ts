import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TodoListItemsAttributes {
    item_id: number;
    title: string;
    description: string;
}
export interface TodoListItemsModel extends Model<TodoListItemsAttributes>, TodoListItemsAttributes { }
export class TodoList extends Model<TodoListItemsModel, TodoListItemsAttributes> { }

export type TodoListItemsStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): TodoListItemsModel;
};

export function TodoListItemsFactory(sequelize: Sequelize) {
    return <TodoListItemsStatic>sequelize.define("items", {
        item_id: {
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
    }, { underscored: true });
}

