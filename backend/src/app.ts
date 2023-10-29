import 'dotenv/config'
import mongoose from 'mongoose'
import express, {NextFunction,Request,Response} from 'express'
import createHttpErrors, { isHttpError } from 'http-errors';
import createHttpError from 'http-errors';
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";
import usersRoutes from './routes/usersRoutes';

//setup express
const app = express()
app.use(express.json())

app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: env.MONGO_URI
    }),
}));

//Forward api requests of users to userRoutes (You can add your own routes for other api request below this in similar way)
app.use('/api/users',usersRoutes)


//Middleware for endpoint that doesnt exist
app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

//Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    
    let errorMessage:string = "An unknown error occurred";
    let statusCode:number = 500;
    console.error(error);
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});

export default app

