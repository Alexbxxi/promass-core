import 'reflect-metadata';
import { Request, Response } from 'express';
import { Post } from '../entities/post-entity';
import { DataSource } from 'typeorm';

export const getAllPosts = async (
  req: Request,
  res: Response,
  connection: DataSource
) => {
  const postRepository = connection.getRepository(Post);
  const posts = await postRepository.find();
  res.json(posts);
};

export const getPostById = async (
  req: Request,
  res: Response,
  connection: DataSource
): Promise<void> => {
  const postId: number = parseInt(req.params.id, 10);

  const postRepository = connection.getRepository(Post);

  try {
    const post = await postRepository.findOne({
      where: {
        id: postId,
      },
    });

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: 'Entrada no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  connection: DataSource
) => {
  const postRepository = connection.getRepository(Post);
  const { title, content, author, creationDate } = req.body;
  const newPost = postRepository.create({
    title,
    content,
    author,
    creationDate,
  });
  await postRepository.save(newPost);
  res.json(newPost);
};
