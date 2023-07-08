import { Router, Request, Response } from "express";
import * as UserController from "../controllers/user.controller";
const router = Router();

router.get("/", (req: Request, res: Response) => {
   res.json({ result: "Bem vindo a API" });
});
router.get("/ping", (req: Request, res: Response) => {
   res.json({ result: "pong" });
});
router.get("/random", (req: Request, res: Response) => {
   let random: number = Math.floor(Math.random() * 100);
   res.json({ random });
});

router.post("/add", UserController.create);
router.get("/users", UserController.read);
router.get("/user/random", UserController.read_random);
router.get("/user/:id", UserController.read_specific);
router.put("/update/:id", UserController.update);
router.delete ("/remove/:id", UserController.remove);

export default router;
