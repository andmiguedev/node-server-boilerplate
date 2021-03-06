import { Router, Request, Response } from 'express';
import { adminController } from '../controllers/index';

export const adminRouter = Router();

adminRouter.post('/', (req: Request, res: Response) => {
  adminController.create(req, res);
});

adminRouter.get('/', (req: Request, res: Response) => {
  adminController.read(req, res);
});

adminRouter.patch('/', (req: Request, res: Response) => {
  adminController.update(req, res);
});

adminRouter.delete('/', (req: Request, res: Response) => {
  adminController.delete(req, res);
});
