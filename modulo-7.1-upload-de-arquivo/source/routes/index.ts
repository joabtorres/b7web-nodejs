import { Router, Request, Response } from "express";
import * as FileController from "../controllers/FileController";

const router = Router();

router.get("/", FileController.home);
router.get("/sobre", FileController.about);

export default router;
