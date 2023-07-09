import { Router } from "express";
import * as UserController from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/users/create", UserController.create);
userRouter.get("/users/read", UserController.read);
userRouter.get("/users/search", UserController.read);
userRouter.get("/users/:id", UserController.readSpecific);
userRouter.put("/users/update/:id", UserController.update);
userRouter.delete("/users/remove/:id", UserController.remove);

export default userRouter;
