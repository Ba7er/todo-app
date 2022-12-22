

import Express from "./express";

class App {
    // Loads your Server
    public loadServer(): void {
        Express.init();
    }
}

export default new App();
