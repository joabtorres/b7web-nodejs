import { Router } from "express";
import * as NewsController from "../controllers/news.controller";

const newsRouter = Router();

newsRouter.post("/news/create", NewsController.create);
newsRouter.get("/news/read", NewsController.read);
newsRouter.get("/news/slug/:slug", NewsController.read_one_slug);
newsRouter.get("/news/id/:id", NewsController.read_one_id);
newsRouter.put("/news/update/:id", NewsController.update);
newsRouter.delete("/news/remove/:id", NewsController.remove);

export default newsRouter;
