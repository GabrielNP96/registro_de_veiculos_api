import express, { json } from 'express';
import connectDB from './config/db.js';

const app = express();

// Conecta ao MongoDB
connectDB();

app.use(json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));