import { Request, Response } from "express";

export const nome = (req: Request, res: Response) => {
   let firstName: string = req.query.firstName as string;
   let showMessage: boolean = false;
   if (req.query.firstName) {
      showMessage = true;
   }

   res.render("pages/nome", {
      firstName,
      showMessage,
   });
};

export const idadeForm = (req: Request, res: Response) => {
   res.render("pages/idade");
};

export const idadeAction = (req: Request, res: Response) => {
   let idade: number = 0;
   let showIdade: boolean = false;

   if (req.body.ano) {
      let ano: number = parseInt(req.body.ano as string);
      let anoAtual: number = new Date().getFullYear();
      idade = anoAtual - ano;
      showIdade = true;
   }
   res.render("pages/idade", {
      showIdade,
      idade,
   });
};
