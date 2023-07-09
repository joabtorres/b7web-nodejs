import { Request, Response } from "express";
import Comment from "../models/comment.model";
/**
 * create - método responsavel para fazer validação dos dados e cadastrar um comentário na noticia
 * @param req
 * @param res
 */
export const create = async (req: Request, res: Response) => {
   let news_id: number = parseInt(req.body.news_id as string);
   let name: string = req.body.name as string;
   let text: string = req.body.text as string;
   if (news_id && name && text) {
      let comment = await Comment.create({
         news_id: news_id,
         name: name,
         text: text,
      });
      res.json({ result: comment });
   } else {
      res.json({ result: "Error, need writing news_id, name, text" });
   }
};

/**
 * update - método responsavel para fazer validação dos dados e editar um comentário na noticia
 * @param req
 * @param res
 */
export const update = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let news_id: number = parseInt(req.body.news_id as string);
   let name: string = req.body.name as string;
   let text: string = req.body.text as string;
   let comment = await Comment.findByPk(id);
   if (comment) {
      comment.news_id = news_id ? news_id : comment.news_id;
      comment.name = name ? name : comment.name;
      comment.text = text ? text : comment.text;
      await comment.save();
      res.json({ comment });
   } else {
      res.json({ result: "Error, comment not found" });
   }
};

/**
 * remove - método responsavel para fazer validação dos dados e excluir um comentário na noticia
 * @param req
 * @param res
 */
export const remove = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let comment = await Comment.findByPk(id);
   if (comment) {
      await comment.destroy();
      res.json({ result: "comment removed from success!" });
   } else {
      res.json({ result: "Error, comment not found" });
   }
};
