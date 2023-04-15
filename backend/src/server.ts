import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { AppRouter } from './routes/AppRouter';
import { DBConnection } from './models/DBConnection';
import { ValidationError } from 'express-validation';

dotenv.config();

const app: Express = express();
DBConnection.connectToDB();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(AppRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  res.status(404);
  return res.json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
