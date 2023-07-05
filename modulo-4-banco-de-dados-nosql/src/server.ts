import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { mongoConnect } from "./database/mongo";
import mustache from "mustache-express";
import path from "path";
import mainRoute from "./routes/index";

mongoConnect();

dotenv.config();

const server = express();

// template engine
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(mainRoute);

server.use((req: Request, res: Response) => {
   res.status(404).send("Página não encontrada!");
});

server.listen(process.env.PORT, () => {
   console.log(`----- SERVIDOR INICIALIADO NA PORTA ${process.env.PORT} ----- `);
});
