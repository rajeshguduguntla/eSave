import cors from 'cors';
import express from 'express';
import { env } from './config/env.js';
import documentRoutes from './routes/document.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'esave-api' });
});

app.use('/api/documents', documentRoutes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json({
    status: 'error',
    message: err.message
  });
});

app.listen(env.port, () => {
  console.log(`[eSave API] listening on port ${env.port}`);
});
