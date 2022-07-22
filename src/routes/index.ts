import { Router, IRouter } from 'express';

import imageRoutes from './api/imageRoute';

const indexRoutes: IRouter = Router();

indexRoutes.use('/', imageRoutes);

export default indexRoutes;
