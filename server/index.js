import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import postRoutes from './routes/postsRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


app.listen(port, () => {
    console.log(`Connected to the server on port ${port}. BOOM BABY!!`);
})