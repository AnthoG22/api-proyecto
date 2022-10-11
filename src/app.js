import express from "express";
import morgan from "morgan";
import { http } from "follow-redirects";

import productRoutes from "./routes/index.routes";

const app = express();

const cors = require('cors');

//let port = process.env.PORT || 4000 ;

let port =  4000 ;

/* Setting the port to 4000. */
app.set("port",port);

/*CORS*/
const whitelist = ['http://127.0.0.1:5500', 'http://127.0.0.1:5501','http://127.0.0.1:5000','http://127.0.0.1:5001']

var corsOptions = {
    origin : function (origin, callback){
        if (whitelist.includes(origin)|| !origin) {
            callback(null,true)
        } else {
            callback(new Error('No permitido por tema de CORS'))
        }
    }
    

}
app.use(cors(corsOptions));

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-restful/products",productRoutes);

export default app;

//http://127.0.0.1:4000/api-restful/products

