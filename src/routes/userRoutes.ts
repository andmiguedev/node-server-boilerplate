import express, { Request, Response } from 'express';
import { usersController } from '../controllers/index';

export const router = express.Router({
  strict: true,
});

router.post('/', (req: Request, res: Response) => {
  usersController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  usersController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
  usersController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  usersController.delete(req, res);
});
