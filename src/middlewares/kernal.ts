/**
 * Register your Express middlewares
 *
 * @author Abdelellah Dandashi <Abdelellah.dandashi@gmail.com>
 */

import { Application } from "express";
import bodyParser = require("body-parser");

class Kernel {
    public static init(_express: Application): Application {
        _express.use(bodyParser.json());
        return _express;
    }
}

export default Kernel;
