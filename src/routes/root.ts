import { Router, Request, Response, NextFunction } from 'express';
import { rootController } from '../controllers/index';
import { asyncRequest } from '../utils/asyncRequest';

const rootRouter = Router();

rootRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.url) {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
         <head>
         <body>
            <h1>Welcome to Node Server</h1>
         </body>
         </head>
      </html>`);

    res.end();
  }

  next(asyncRequest(rootController.getBaseRequest));
});

export { rootRouter };
