import { Router } from "express";
import * as CommentController from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.post("/comments/create", CommentController.create);
commentRouter.put("/comments/update/:id", CommentController.update);
commentRouter.delete("/comments/remove/:id", CommentController.remove);

export default commentRouter;
