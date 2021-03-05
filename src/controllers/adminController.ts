import { Request, Response } from 'express';
import { CRUDController } from './crudController';

export class AdminController extends CRUDController {
  public create(req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void {
    throw new Error('Method not implemented.');
  }

  public read(req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void {
    res.json({ message: 'GET /admin access granted' });
  }

  public update(req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void {
    throw new Error('Method not implemented.');
  }

  public delete(req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void {
    throw new Error('Method not implemented.');
  }
}
