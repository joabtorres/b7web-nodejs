import { Request, Response } from "express";
import News from "../models/news.model";
import { User } from "../models/user.model";
import Comment from "../models/comment.model";
import slugify from "slugify";
import { Op } from "sequelize";
/**
 * create - método responsavel para fazer validação dos dados e cadastrar uma notícia
 * @param req
 * @param res
 */
export const create = async (req: Request, res: Response) => {
   let title: string = req.body.title as string;
   let slug: string = slugify(title, { lower: true });
   let text: string = req.body.text as string;
   let author_id: number = parseInt(req.body.author_id as string);
   let news = await News.create({
      title,
      slug,
      text,
      author_id,
   });
   res.json({ result: news });
};

/**
 * read - método responsavel para fazer validação dos dados e consulta as notícias
 * @param req
 * @param res
 */
export const read = async (req: Request, res: Response) => {
   let newsList = await News.findAll({
      raw: true,
      include: [
         {
            model: User,
            required: true,
            attributes: ["name"],
         },
      ],
      order: [["id", "DESC"]],
   });
   res.json({ result: newsList });
};

/**
 * read_one_id - método responsavel para fazer validação dos dados e consultar uma notícia
 * @param req
 * @param res
 */
export const read_one_id = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let news = await News.findOne({
      where: {
         id: {
            [Op.eq]: id,
         },
      },
      include: {
         model: User,
         required: true,
         attributes: ["name"],
      },
   });
   res.json({ result: news });
};

/**
 * read_one_slug - método responsavel para fazer validação dos dados e consultar uma notícia
 * @param req
 * @param res
 */
export const read_one_slug = async (req: Request, res: Response) => {
   let slug: string = req.params.slug as string;
   let news = await News.findOne({
      where: {
         slug: {
            [Op.like]: `%${slug}%`,
         },
      },
      include: {
         model: User,
         required: true,
         attributes: ["name"],
      },
   });
   if (news) {
      let id: number = news.id;
      let comments = await Comment.findAll({
         where: {
            news_id: {
               [Op.eq]: id,
            },
         },
      });
      if (comments) {
         res.json({ result: news, comments });
      } else {
         res.json({ result: news });
      }
   }
};

/**
 * update - método responsavel para fazer validação dos dados e editar uma notícia
 * @param req
 * @param res
 */
export const update = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let news = await News.findByPk(id);
   if (news) {
      let title: string = req.body.title as string;
      let text: string = req.body.text as string;
      let author_id: number = parseInt(req.body.author_id as string);
      news.title = title ? title : news.title;
      if (title) {
         news.slug = slugify(title, { lower: true });
      }
      news.text = text ? text : news.text;
      news.author_id = author_id ? author_id : news.author_id;
      await news.save();
   }
   res.json({ result: news });
};

/**
 * remove - método responsavel para fazer validação dos dados e excluir uma notícia
 * @param req
 * @param res
 */
export const remove = async (req: Request, res: Response) => {
   let id: number = parseInt(req.params.id as string);
   let news = await News.findByPk(id);
   if (news) {
      await news.destroy();
      res.json({ result: true });
   } else {
      res.json({ result: false });
   }
};
