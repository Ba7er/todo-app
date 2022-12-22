
import App from "./providers/app";

process.on("uncaughtException", (exception) => {
    console.log("uncaughtException error", exception);
    process.exit(1); //Exist the app
}

);
App.loadServer();
