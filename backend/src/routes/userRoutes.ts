import express from "express";
import { requiresAuth } from "../middleware/auth";
import * as UserController from "../controllers/users";

const router = express.Router()
//Add your endpoints here

router.get("/", requiresAuth, UserController.getAuthenticatedUser);

router.post("/signup", UserController.signUp);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

export default router