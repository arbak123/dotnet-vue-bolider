import { RequestHandler } from "express";
import createHttpError from "http-errors";

//Auth middleware for routes that would require only authenticated users
export const requiresAuth: RequestHandler = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        next(createHttpError(401, "User not authenticated"));
    }
};