import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql.connect";

export interface UserInterface extends Model {
   id: number;
   name: string;
   email: string;
   password: string;
}

export const User = sequelize.define<UserInterface>(
   "User",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      name: {
         type: DataTypes.STRING,
      },
      email: {
         type: DataTypes.STRING,
      },
      password: {
         type: DataTypes.STRING,
      },
   },
   {
      tableName: "users",
      timestamps: false,
   }
);
