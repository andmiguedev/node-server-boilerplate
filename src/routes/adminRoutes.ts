import express, { Request, Response } from 'express';
import { adminController } from '../controllers/index';

export const router = express.Router({
  strict: true,
});

router.post('/', (req: Request, res: Response) => {
  adminController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  adminController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
  adminController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  adminController.delete(req, res);
});
