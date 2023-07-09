import { Request, Response } from "express";
import { User } from "../models/user.model";
import { Op } from "sequelize";
/***
 * controller de cadastro de usuário
 */
export const create = async (req: Request, res: Response) => {
   let user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
   });
   res.json({ result: user });
};

/***
 * controller de leitura de usuários
 */
export const read = async (req: Request, res: Response) => {
   let users = [];
   if (req.query.name) {
      let searchName = req.query.name as string;
      users = await User.findAll({
         where: {
            name: {
               [Op.like]: `%${searchName}%`,
            },
         },
      });
   } else {
      users = await User.findAll();
   }
   res.json({ result: users });
};

/***
 * controller de leitura de usuário
 */
export const readSpecific = async (req: Request, res: Response) => {
   if (req.params.id) {
      let id = parseInt(req.params.id as string);
      let user = await User.findByPk(id);
      res.json({ result: user });
   } else {
      res.json({ result: "Request error, not found" });
   }
};

/***
 * controller de edição de usuário
 */
export const update = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let name: string = req.body.name as string;
   let email: string = req.body.email as string;
   let password: string = req.body.password as string;

   let user = await User.findByPk(id);
   if (user) {
      user.name = name ? name : user.name;
      user.email = email ? email : user.email;
      user.password = password ? password : user.password;
      await user.save();
   }
   res.json({ result: user });
};

/***
 * controller de excluão de usuário
 */
export const remove = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let user = await User.findByPk(id);
   if (user) {
      await user.destroy();
      res.json({ result: true });
   } else {
      res.json({ result: false });
   }
};
