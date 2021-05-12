export { rootController } from './Base/rootController';

import { UserController } from './Users/userController';
const userController = new UserController();
export { userController }

import { AdminController } from './Admin/adminController';
const adminController = new AdminController();
export { adminController };
