import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

class ImageController {
   public static guide(req: Request, res: Response) {
      res.status(200).json({
         URL: 'http://localhost:3000/images?filename=palmtunnel&width=200&height=200'
      });
   }

   private static getImagePath(imageName: string): string {
      const imagePath: string = path.join(
         __dirname,
         '../../assets/images/' + imageName + '.jpg'
      );
      return imagePath;
   }

   /****************************************************************/

   private static checkImage(imageName: string): boolean {
      const imagePath = this.getImagePath(imageName);
      return fs.existsSync(imagePath);
   }

   /****************************************************************/

   public static async resizeImage(
      imagePath: string,
      imageName: string,
      width: number,
      height: number
   ): Promise<string> {
      const filePath = path.join(
         __dirname,
         '../../assets/thumb/' + imageName + '.jpg'
      );

      try {
         await sharp(imagePath)
            .resize(+width, +height)
            .toFile(filePath);
      } catch (error) {
         console.log(error);
      }
      return filePath;
   }

   /****************************************************************/

   public static async getImage(
      req: Request,
      res: Response
   ): Promise<Response | void> {
      const filename: string = req.query.filename as string;
      const width: number = req.query.width as unknown as number;
      const height: number = req.query.height as unknown as number;
      const imageExist = ImageController.checkImage(filename);

      if (!imageExist) {
         return res.status(404).json({
            error: 'Image does not exist'
         });
      }

      let imagePath = ImageController.getImagePath(filename);

      if (width && height) {
         imagePath = await ImageController.resizeImage(
            imagePath,
            filename,
            width,
            height
         );
      }

      return res.status(200).sendFile(imagePath);
   }
}

export default ImageController;
