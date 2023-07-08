import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(cors());

server.get("/ping", (req: Request, res: Response) => {
   res.status(200).json({ result: "Pong" });
});

server.use((req: Request, res: Response) => {
   res.status(404).json({ result: "Request not found" });
});

server.listen(process.env.PORT, () => {
   console.log(`Server starting in port: ${process.env.PORT}`);
});
