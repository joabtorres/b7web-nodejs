import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./instances/mysql.connect";
import userRouter from "./routes/user.route";
import newsRouter from "./routes/news.router";
import commentRouter from "./routes/comment.route";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(cors());

server.use(userRouter);
server.use(newsRouter);
server.use(commentRouter);

server.get("/connect", async (req: Request, res: Response) => {
   try {
      await sequelize.authenticate();
      res.json({ result: "Connection established successfully" });
   } catch (error) {
      res.json({ result: "failed in connection from database" });
   }
});

server.get("/ping", (req: Request, res: Response) => {
   res.status(200).json({ result: "Pong" });
});

server.use((req: Request, res: Response) => {
   res.status(404).json({ result: "Request not found" });
});

server.listen(process.env.PORT, () => {
   console.log(`Server starting in port: ${process.env.PORT}`);
});
