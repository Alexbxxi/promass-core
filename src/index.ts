import express from 'express';
import postRoutes from './routes/post-routes';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api/v1', postRoutes);

app.listen(3000, () => {
  console.log('Server inited on http://localhost:3000');
});
