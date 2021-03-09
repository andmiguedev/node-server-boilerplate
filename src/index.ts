const http = require('https');

import { server } from './core/expressServer';
import { rootRouter, adminRouter } from './routes/index';
import registerMiddlewares from './middlewares/index';

// To allow SSL Certificates, pass the following config
// { key, cert }, under options params
async function start() {
  http.createServer(() => {
    registerMiddlewares(server);
    server.listen();
  });

  server.all('/', (req, res) => res.redirect('/v1'));
  server.use('/v1', rootRouter);
  server.use('/v1/admin', adminRouter);
}

start();
