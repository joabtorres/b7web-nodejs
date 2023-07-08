import { Model, DataTypes } from "sequelize";
import { sequelize as connectDB } from "../instances/mysql.connect";

export interface UserInstance extends Model {
   id: number;
   fullName: string;
   age: number;
   email: string;
   password: string;
}

export const User = connectDB.define<UserInstance>(
   "User",
   {
      id: {
         primaryKey: true,
         autoIncrement: true,
         type: DataTypes.INTEGER,
      },
      fullName: {
         type: DataTypes.STRING,
      },
      age: {
         type: DataTypes.NUMBER,
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
      },
      password: {
         type: DataTypes.STRING,
         defaultValue: "root",
      },
   },
   {
      tableName: "users",
      timestamps: false,
   }
);
