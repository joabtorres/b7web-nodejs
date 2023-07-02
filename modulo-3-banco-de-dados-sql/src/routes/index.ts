import { Router } from "express";
import * as HomeController from "../controllers/homeController";
import * as UserController from "../controllers/UserController";
const router = Router();

router.get("/", HomeController.home);
router.post("/user/created", UserController.created);
router.get("/user/removed/:id", UserController.removed);
router.get("/user/updated/:id", UserController.updated);
router.post("/user/updated", UserController.updatedSave);

export default router;
