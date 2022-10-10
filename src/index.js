import app from "./app"

/**
 * Main() is a function that starts the server on the port specified in the app.set("port") function
 */
const main = () => {
    app.listen(app.get("port"));
    console.log("server on port:",app.get("port"));
}

main();