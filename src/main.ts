import express, { Application, Request, Response } from 'express';
import indexRoutes from './routes/index';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(indexRoutes);
app.all('*', (req: Request, res: Response): Response => {
   return res.status(404).json({
      error: `This resource: ${req.originalUrl} does not exist`
   });
});

app.listen(PORT, () => {
   console.log(`app is listening on http://localhost:${PORT}`);
});

export default app;
