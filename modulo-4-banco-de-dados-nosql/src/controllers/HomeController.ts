import { Request, Response } from "express";
import User from "../models/User";
export const home = async (req: Request, res: Response) => {
   let usuarios = await User.find({});
   res.status(200).render("pages/home", {
      listUsers: usuarios,
   });
};

//buscar
//findeOne({age: 18})
//find({age: {$gt: 18, $lt: 15}})
//byprimaryKey("ASDASd1asd45s461");

//ordenação dos resultados

//find({}).sort({age: 1 (ASC) ou -1 (DESC) });
//find({}).sort({"name.firstName": 1, "name.LastName": 1 });

//limita lista dos resultados
// find({}).limit(2);

//pule registros
// find({}).skip(0).limit(2);

//create
/**
 * let newUser = new User();
 * newUser.age = 40
 * let resultado = await newUser.save();
 *
 *
 * //////////////////////
 *
 * let newUser = await User.create({
 *    age:30
 * });
 *
 *  */

/**
 * ~~ update
 * await User.updateMany(
 *    {age: {$lte: 18}},
 *    {age: 18}
 * )
 *
 * await User.updateOne(
 *    {email: "joabtorres1508@gmail.com"},
 *    {age: 18}
 * )
 *
 * //
 * user = findOne
 * altera
 * await user.save()
 *
 *
 * let user = await User.findOneAndUpdate(
 * {email: "joabtorres1508@gmail.com"},
 * {age: 18})
 */

/**
 * DELETE
 * let user = await User.findOneAndDelete(  * {email: "joabtorres1508@gmail.com"})
 *
 *
 * user = findOne
 * await user.remove()
 */
