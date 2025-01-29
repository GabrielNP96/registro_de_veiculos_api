import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
    try {
      const uri = process.env.MONGO_URI;
      if (!uri) {
        console.error('Erro: URI do MongoDB não encontrada.');
        process.exit(1);
      }
      await mongoose.connect(uri);
      console.log('MongoDB Connected');
    } catch (error) {
      console.error('❌ Erro ao conectar ao MongoDB:', error.message);
      process.exit(1);
    }
  };
  
  export default connectDB;