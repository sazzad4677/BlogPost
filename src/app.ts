import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

// global error Handler
app.use(globalErrorHandler);

// not found error
app.use(notFound);
export default app;
