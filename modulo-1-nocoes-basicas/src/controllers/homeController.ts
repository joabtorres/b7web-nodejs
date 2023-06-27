import { Request, Response } from "express";

import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
   let age: number = 15;
   let showOld: boolean = false;
   if (age > 50) {
      showOld = true;
   }

   res.render("pages/home", {
      firstName: "Joab",
      lastName: "T. Alencar",
      showOld,
      products: Product.getAll(),
      productsFrom: Product.getFromPriceAfter(12),
      frases: [
         "Hojé é um otimo dia para aprender a programar nodejs",
         "Amanhã também será um ótimo dia para aprender a programar em NodeJS",
      ],
   });
};
