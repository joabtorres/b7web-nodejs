import { Request, Response, query } from "express";
import User from "../models/User";
export const home = async (req: Request, res: Response) => {
   let type: string = req.query.nType as string;
   let value: string = req.query.nValue as string;
   let usuarios = await read(type, value);
   res.status(200).render("pages/home", {
      listUsers: usuarios,
   });
};

const read = async (type: string, value: string) => {
   switch (type) {
      case "name_equal":
         return await User.find({
            "name.firstName": value,
         });
      case "id":
         return await User.find({
            _id: value,
         });
      case "age_equal":
         return await User.find({
            age: value,
         });
      case "age_up":
         return await User.find({
            age: { $gt: value },
         });
      case "age_up_equal":
         return await User.find({
            age: { $gte: value },
         });
      case "age_lower":
         return await User.find({
            age: { $lt: value },
         });
      case "age_lower_equal":
         return await User.find({
            age: { $lte: value },
         });
      default:
         return await User.find({});
   }
};
/**
 * https://mongoosejs.com/docs/guide.html
 * documentação
 */
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
