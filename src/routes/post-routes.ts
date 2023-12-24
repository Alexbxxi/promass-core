import express, { Request, Response } from 'express';
import { getAllPosts, createPost, getPostById } from '../controllers/post-controller';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

// Carga las variables de entorno del archivo .env
config();
const dbOptions: DataSourceOptions = JSON.parse(process.env.DB_OPTIONS as string);
const AppDataSource = new DataSource(dbOptions);

AppDataSource.initialize().then(()=> console.log('Db connected'));

const router = express.Router();

router.get('/posts', (req: Request, res: Response) => {
  getAllPosts(req, res, AppDataSource);
});

router.get('/post/:id', (req: Request, res: Response) => {
  getPostById(req, res, AppDataSource);
});

router.post('/posts', (req: Request, res: Response) => {
  createPost(req, res, AppDataSource);
});

export default router;
