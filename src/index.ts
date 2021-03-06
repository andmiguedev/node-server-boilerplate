import http from 'http';

import { server } from './core/expressServer';
import { rootRouter, adminRouter } from './routes/index';
import registerMiddlewares from './middlewares/index';

async function start() {
  await http.createServer((req, res) => {
    registerMiddlewares(server);
    server.listen();
  });

  server.all('/', (req, res) => res.redirect('/v1'));
  server.use('/v1', rootRouter);
  server.use('/v1/admin', adminRouter);
}

start();
