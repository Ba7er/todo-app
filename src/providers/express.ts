/**
 * Primary file for creating Express server.
 *
 * @author Abdelellah Dandashi <Abdelellah.dandashi@gmail.com>
 */

import * as express from "express";

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
    }

    /**
     * Starts the express server
     */
    public init(): void {
        // Start the server on the specified port
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
