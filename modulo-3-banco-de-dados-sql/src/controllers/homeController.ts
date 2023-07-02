import { Request, Response } from "express";
import { Crud, User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
   let typeSearch = req.query.type_search as string;
   let search = req.query.search as string;
   var users;
   if (typeSearch && search) {
      users = await Crud.read_search(typeSearch, search);
   } else {
      users = await Crud.read_all();
   }

   let showUsers = users.length > 0;

   res.render("pages/home", {
      users,
      showUsers
   });
};
