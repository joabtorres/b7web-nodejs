import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql.connect";

export interface CommentInstance extends Model {
   id: number;
   news_id: number;
   name: string;
   text: string;
}

const Comment = sequelize.define<CommentInstance>(
   "Comment",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         autoIncrementIdentity: true,
      },
      news_id: {
         type: DataTypes.INTEGER,
      },
      name: {
         type: DataTypes.STRING,
      },
      text: {
         type: DataTypes.STRING,
      },
   },
   {
      tableName: "comments",
      timestamps: false,
   }
);

export default Comment;
