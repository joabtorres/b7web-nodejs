import { Model, DataTypes } from "sequelize";
import { sequelize as connectDB } from "../instances/mysql";
import { Op } from "sequelize";
export interface UserInstance extends Model {
   id: number;
   first_name: string;
   last_name: string;
   age: number;
}
export type UserForm = {
   id: number | undefined;
   first_name: string;
   last_name: string;
   age: number;
};

export const User = connectDB.define<UserInstance>(
   "User",
   {
      id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
      },
      first_name: {
         type: DataTypes.STRING,
      },
      last_name: {
         type: DataTypes.STRING,
      },
      age: {
         type: DataTypes.STRING,
         defaultValue: 18,
         set(value: number) {
            if (value < 18 || !value) {
               this.setDataValue("age", 18);
            } else {
               this.setDataValue("age", value);
            }
         },
      },
      full_name: {
         type: DataTypes.VIRTUAL,
         get() {
            return `${this.getDataValue("first_name")} ${this.getDataValue(
               "last_name"
            )}`;
         },
      },
   },
   {
      tableName: "users",
      timestamps: false,
   }
);

export const Crud = {
   /**
    * Primeira forma de realizar cadastro de um registro
    */
   create: async (userForm: UserForm) => {
      const user = await User.create({
         first_name: userForm.first_name,
         last_name: userForm.last_name,
         age: userForm.age,
      });
      return user;
   },
   /**
    * Segunda forma de realziar create de um registro
    */
   crete_build: async (userForm: UserForm) => {
      const user = User.build({
         first_name: userForm.first_name,
         last_name: userForm.last_name,
         age: userForm.age,
      });
      return await user.save();
   },
   /**
    * Primeira forma de realizar update de um registro
    */
   update: async (userForm: UserForm) => {
      return await User.update(userForm, {
         where: {
            id: userForm.id,
         },
      });
   },
   /**
    * Segunda forma de realizar update de um registro
    */
   update_builder: async (userForm: UserForm) => {
      let resultado = await User.findAll({ where: { id: userForm.id } });
      if (resultado.length > 0) {
         let user = resultado[0];
         user.first_name = userForm.first_name;
         user.last_name = userForm.last_name;
         user.age = userForm.age;
         return await user.save();
      }
   },
   /**
    *
    */
   delete: async (id: number) => {
      let result = await User.findByPk(id);
      if (result !== null) {
         return await result.destroy();
      }
      return;
   },
   /**
    * Lista todos os resultados
    */
   read_all: async () => {
      return await User.findAll();
   },
   /**
    * busca por varios registros com opcoes de consulta
    */
   read_search: async (type: string, search: string) => {
      let arraySearch = null;
      switch (type) {
         case "name_equal":
            arraySearch = {
               first_name: {
                  [Op.eq]: search,
               },
            };
            break;
         case "name_like":
            arraySearch = {
               first_name: {
                  [Op.like]: `%${search}%`,
               },
            };
            break;
         case "id":
            arraySearch = {
               id: {
                  [Op.eq]: search,
               },
            };
            break;
         case "age_equal":
            arraySearch = {
               age: {
                  [Op.eq]: search,
               },
            };
            break;
         case "age_up":
            arraySearch = {
               age: {
                  [Op.gt]: search,
               },
            };
            break;
         case "age_up_equal":
            arraySearch = {
               age: {
                  [Op.gte]: search,
               },
            };
            break;
         case "age_lower":
            arraySearch = {
               age: {
                  [Op.lt]: search,
               },
            };
            break;
         case "age_lower_equal":
            arraySearch = {
               age: {
                  [Op.lte]: search,
               },
            };
            break;
         default:
            arraySearch = {
               first_name: {
                  [Op.like]: `%${search}%`,
               },
            };
            break;
      }
      return await User.findAll({
         where: arraySearch,
      });
   },
   /**
    * busca de somente um registro
    */
   read_one: async (id: number) => {
      const user = await User.findOne({
         where: {
            id: id,
         },
      });
      return user;
   },
};
