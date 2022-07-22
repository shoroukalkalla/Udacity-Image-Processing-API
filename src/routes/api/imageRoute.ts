import { Router, IRouter } from 'express';
import ImageController from '../../controllers/image.controller';
import QueryValidator from '../../middlewares/queryValidator';

const imageRoutes: IRouter = Router();

imageRoutes.get('/', ImageController.guide);
imageRoutes.get('/images', QueryValidator.validate, ImageController.getImage);

export default imageRoutes;
