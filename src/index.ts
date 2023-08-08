import dotenv from 'dotenv';
import { Express } from 'express';
import routes from './routes';

dotenv.config();

const app: Express = routes;
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;