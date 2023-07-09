import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql.connect";
import { User } from "./user.model";
export interface newsInstance extends Model {
   id: number;
   title: string;
   slug: string;
   text: string;
   author_id: number;
}

const News = sequelize.define<newsInstance>(
   "News",
   {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING, allowNull: false },
      slug: { type: DataTypes.STRING, allowNull: false, unique: true },
      text: { type: DataTypes.STRING },
      author_id: {
         type: DataTypes.NUMBER,
         allowNull: false,
         set(x) {
            if (x) {
               this.setDataValue("author_id", x);
            } else {
               this.setDataValue("author_id", 1);
            }
         },
      },
   },
   {
      timestamps: false,
      tableName: "news",
   }
);

News.belongsTo(User, { foreignKey: "author_id" });

export default News;
