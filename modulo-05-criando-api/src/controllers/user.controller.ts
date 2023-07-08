import { Request, Response } from "express";
import { User } from "../models/user.model";
import { Sequelize, json } from "sequelize";
/**
 * Construcao de API de lista de usuarios
 */

export const create = async (req: Request, res: Response) => {
   let user = await User.create({
      fullName: req.body.fullName,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
   });
   res.json({ user });
};
export const read = async (req: Request, res: Response) => {
   let listUsers = await User.findAll();
   if (listUsers) {
      res.json({ listUsers });
   } else {
      res.json({ error: "Nenhum resultado encontrado" });
   }
};
export const read_specific = async (req: Request, res: Response) => {
   let id = req.params.id;
   let user = await User.findByPk(id);
   if (user) {
      res.json({ user });
   } else {
      res.json({ error: "Nenhum resultado encontrado" });
   }
};
export const read_random = async (req: Request, res: Response) => {
   let user = await User.findOne({
      order: Sequelize.fn("RAND"),
   });
   if (user) {
      res.json({ user });
   } else {
      res.json({ error: "Nenhum resultado encontrado" });
   }
};
export const update = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let fullName: string = req.body.fullName as string;
   let age: number = parseInt(req.body.age as string);
   let email: string = req.body.email as string;
   let password: string = req.body.password as string;
   let user = await User.findByPk(id);
   if (user) {
      user.fullName = fullName ? fullName : user.fullName;
      user.age = age ? age : user.age;
      user.email = email ? email : user.email;
      user.password = password ? password : user.password;
      await user.save();
   }
   res.json({ user });
};

export const remove = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id);
   let user = await User.findByPk(id);
   if (user) {
      await user.destroy();
      res.json({ result: true });
   } else {
      res.json({ result: false });
   }
};
