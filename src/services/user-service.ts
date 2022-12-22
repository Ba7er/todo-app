import { Op } from "sequelize";
import { DB } from "../models/index";
import { UserModel } from "../models/users";
import { UserRegister } from "../types/types";


export class UserService {

    public constructor(private db: DB) {
        this.getUserByEmail = this.getUserByEmail.bind(this);
        this.save = this.save.bind(this);

    }


    public async getUserByEmail(email: string): Promise<UserModel | null> {
        return this.db.User.findOne({
            where: { email },
        }).then(saved => {
            return saved;
        });
    }

    public async save(user: UserRegister): Promise<UserModel | null> {
        if (user.id !== undefined) {
            await this.db.User.update(user, {
                where: { [Op.and]: { id: user.id, email: user.email } },
            });
        }
        const res = await this.db.User.create(user);
        return res;

    }

}
