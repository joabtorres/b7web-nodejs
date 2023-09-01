import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
   res.send("página home");
};

export const about = (req: Request, res: Response) => {
   res.send("Página sobre");
};




