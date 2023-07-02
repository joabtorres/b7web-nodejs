import { Request, Response } from "express";
import { Crud, User, UserForm } from "../models/User";

export const created = async (req: Request, res: Response) => {
   let userForm: UserForm = {
      id: undefined,
      first_name: req.body.firstName as string,
      last_name: req.body.lastName as string,
      age: parseInt(req.body.age as string),
   };
   if (userForm.first_name && userForm.last_name) {
      await Crud.create(userForm);
   }
   res.redirect("/");
};

export const updated = async (req: Request, res: Response) => {
   let id = parseInt(req.params.id as string);

   let userResult = await Crud.read_one(id);

   res.render("pages/update", {
      UserForm: userResult,
   });
};

export const updatedSave = async (req: Request, res: Response) => {
   let userForm: UserForm = {
      id: parseInt(req.body.id as string),
      first_name: req.body.firstName as string,
      last_name: req.body.lastName as string,
      age: parseInt(req.body.age as string),
   };
   if (userForm.first_name && userForm.last_name) {
      await Crud.update(userForm);
   }
   res.redirect("/");
};

export const removed = async (req: Request, res: Response) => {
   let id = parseInt(req.params.id as string);

   if (id) {
      await Crud.delete(id);
   }

   res.redirect("/");
   return;
};
