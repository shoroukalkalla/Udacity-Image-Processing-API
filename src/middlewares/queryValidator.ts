import { Request, Response, NextFunction } from 'express';

class QueryValidator {
   public static validate(req: Request, res: Response, next: NextFunction) {
      const width = req.query.width;
      const height = req.query.height;
      const filename = req.query.filename;
      if (!filename) {
         return res.status(400).json({
            error: 'You must enter a valid filename'
         });
      }

      if (width || height) {
         if (!(Number(width) > 0) || !(Number(height) > 0)) {
            return res.status(400).json({
               error: 'Width And Height are required and must be a number'
            });
         }
      }
      next();
   }
}

export default QueryValidator;
