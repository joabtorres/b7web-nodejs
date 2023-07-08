import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import router from "./routes/api.router";
dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(router);

server.use((req: Request, res: Response) => {
   res.status(404).json({ error: "Requisição não encontrada!" });
});

server.listen(process.env.PORT, () => {
   console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});
