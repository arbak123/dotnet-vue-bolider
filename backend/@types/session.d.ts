import mongoose from "mongoose";
import 'express-session';

//Adds userId property to the SessionData interface
declare module "express-session" {
    interface SessionData {
        userId: mongoose.Types.ObjectId;
    }
}