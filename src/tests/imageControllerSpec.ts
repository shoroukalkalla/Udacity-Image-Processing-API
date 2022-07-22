import path from 'path';

import ImageController from '../controllers/image.controller';

describe('Image Controller', () => {
   describe('check resizing image', () => {
      it('resizes image', async () => {
         const imagePath = path.join(
            __dirname,
            '../../assets/thumb/palmtunnel.jpg'
         );
         const resizedImage = await ImageController.resizeImage(
            imagePath,
            'palmtunnel',
            200,
            200
         );
         expect(resizedImage).toBeTruthy();
      });
   });
});
