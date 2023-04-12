import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { AppRouter } from './routes/AppRouter';
import { DBConnection } from './models/DBConnection';

dotenv.config();

const app: Express = express();
DBConnection.connectToDB();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(AppRouter);

app.use((req, res, next) => {
  res.status(404);
  return res.json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
