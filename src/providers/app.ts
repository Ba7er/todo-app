import Express from "./express";
import { db } from "../models/index";

class App {
    // Loads your Server
    public loadServer(): void {
        Express.init();
    }

    //Loads the Database Pool
    public async loadDatabase(): Promise<void> {
        await db.sequelize.authenticate();
        await db.sequelize.sync({ force: false }); // @TODO: change for prod 
        console.log('Connection has been established successfully.');
    }
}

export default new App();
