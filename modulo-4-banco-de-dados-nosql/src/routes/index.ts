import { Router } from "express";
import * as HomeContrller from "../controllers/HomeController";
import * as UserController from "../controllers/UserController";

const router = Router();

router.get("/", HomeContrller.home);
router.post("/user/create", UserController.insert);
router.get("/user/remove/:id", UserController.remove);
router.get("/user/update/:id", UserController.update);
router.post("/user/update", UserController.updateSave);

export default router;
