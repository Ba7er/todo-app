/**
 * Primary file for creating Express server.
 *
 * @author Abdelellah Dandashi <Abdelellah.dandashi@gmail.com>
 */

import * as express from "express";
import Routes from "./routes";
import Bootstrap from "../middlewares/kernal";
import ExceptionHandler from "../exception/handler";


class Express {
    /**
     * Create the express object
     */
    public express: express.Application;

    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountRoutes();
    }

    /**
  * Mounts all the defined routes
  */
    private mountRoutes(): void {
        this.express = Routes.mountApi(this.express);
    }

    /**
  * Mounts all the defined middlewares
  */
    private mountMiddlewares(): void {
        this.express = Bootstrap.init(this.express);
    }

    /**
     * Starts the express server
     */
    public init(): void {
        // Start the server on the specified port
        this.express.use(ExceptionHandler.errorHandler);
        this.express
            .listen(process.env.PORT, () => {
                return console.log(
                    `Server Running @ 'http://localhost:${process.env.PORT}'`
                );
            })
            .on("error", (_error) => {
                return console.log("Error: ", _error.message);
            });
    }
}

/** Export the express module */
export default new Express();
