import { server } from './core/expressServer';
import { usersRoutes } from './routes/index';

import registerMiddlewares from './middlewares';

async function start() {
  registerMiddlewares(server);
  server.listen();

  server.use('/users', usersRoutes);
}

start();
