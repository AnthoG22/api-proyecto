import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/index.routes";

const app = express();

/* Setting the port to 4000. */
app.set("port",process.env.PORT || 4000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-restful/products",productRoutes);

export default app;

//http://127.0.0.1:4000/api-restful/products

