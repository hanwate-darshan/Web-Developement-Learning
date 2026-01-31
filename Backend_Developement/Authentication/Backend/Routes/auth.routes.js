import express, { Router } from "express"
import { login, logOut, signUp } from "../controllers/auth.controllers.js";

const authRouter = express(Router())

authRouter.post("/signup",upload.single("profileImage") ,signUp)
authRouter.post("/login",login)
authRouter.post("/logout",logOut)

export default authRouter;