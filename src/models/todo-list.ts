import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TodoListAttributes {
    list_id: number;
    list_name: string;
}
export interface TodoListModel extends Model<TodoListAttributes>, TodoListAttributes { }
export class TodoList extends Model<TodoListModel, TodoListAttributes> { }

export type TodoListStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): TodoListModel;
};

export function TodoListFactory(sequelize: Sequelize) {
    return <TodoListStatic>sequelize.define("list", {
        list_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        list_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { underscored: true });
}

