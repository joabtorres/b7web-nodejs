import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", true);

export const mongoConnect = async () => {
   try {
      console.log("Conectando ao mongoDB... ");
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log("Conexão do mongoDB estabelecida!");
   } catch (error) {
      console.log("Erro ao conectar ao mongoDB: ", error);
   }
};
