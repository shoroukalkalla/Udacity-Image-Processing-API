import express, { Application } from 'express';
import indexRoutes from './routes/index';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(indexRoutes);

app.listen(PORT, () => {
   console.log(`app is listening on http://localhost:${PORT}`);
});

export default app;
