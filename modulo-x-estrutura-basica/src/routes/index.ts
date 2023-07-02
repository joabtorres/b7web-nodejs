import { Router } from "express";
import * as HomeContrller from "../controllers/HomeController";

const router = Router();

router.get("/", HomeContrller.home);

export default router;
