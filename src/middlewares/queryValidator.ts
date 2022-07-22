import { Request, Response, NextFunction } from 'express';

class QueryValidator {
   public static validate(req: Request, res: Response, next: NextFunction) {
      const width = req.query.width;
      const height = req.query.height;
      if (width && height) {
         if (!(Number(width) > 0) && !(Number(height) > 0)) {
            return res.status(400).json({
               error: 'Width And Height Must Be A Number'
            });
         }
      }
      next();
   }
}

export default QueryValidator;
