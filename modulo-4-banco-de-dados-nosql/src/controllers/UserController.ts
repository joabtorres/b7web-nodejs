import { Request, Response } from "express";
import User from "../models/User";

export const insert = async (req: Request, res: Response) => {
   let userCore = {
      age: parseInt(req.body.age as string),
      email: req.body.email as string,
      name: {
         firstName: req.body.firstName as string,
         lastName: req.body.firstName as string,
      },
      interesses: (req.body.interesses as string).split(", "),
   };
   if (
      userCore.name &&
      userCore.email &&
      userCore.name.firstName &&
      userCore.name.firstName
   ) {
      await User.create(userCore);
   }
   res.redirect("/");
};

export const remove = async (req: Request, res: Response) => {
   const id = req.params.id as string;
   await User.findOneAndRemove({ _id: id });
   res.redirect("/");
};

export const update = async (req: Request, res: Response) => {
   const id = req.params.id as string;
   let user = await User.findOne({ _id: id });
   res.render("pages/update", {
      user,
   });
};

export const updateSave = async (req: Request, res: Response) => {
   const id = req.body.id as string;
   let userUpdate = await User.findOne({ _id: id });
   if (userUpdate) {
      userUpdate.age = parseInt(req.body.age as string);
      userUpdate.email = req.body.email as string;
      userUpdate.name = {
         firstName: req.body.firstName as string,
         lastName: req.body.firstName as string,
      };
      if ((req.body.interesses as string).split(",").length > 0) {
         let interesses: string[] = (req.body.interesses as string).split(",");
         for (let i in interesses) {
            userUpdate.interesses[i] = interesses[i];
         }
      }
      await userUpdate.save();
   }
   res.redirect("/");
};
