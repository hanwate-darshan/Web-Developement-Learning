import { Router } from "express";
import express from "express";
import { create, delette, home, read, update } from "../controllers/user.controllers.js";

let userRouter = express(Router())

userRouter.get("/",home)

userRouter.post("/create",create)

userRouter.get("/read", read)
 
userRouter.put("/update/:id", update)


userRouter.delete("/delete/:id",delette)

export default userRouter;