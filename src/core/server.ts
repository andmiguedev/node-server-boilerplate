import { createServer, IncomingMessage, ServerResponse } from 'http';

const app = require('../config/express');
const logger = require('../core/logger');
const config = require('../utils/environment');

import { Url } from '../utils/urls';

export class Server {
  private url: Url;

  constructor() {
    this.url = new Url();
  }

  public setupNodeServer() {
    const server = createServer((req: IncomingMessage, res: ServerResponse) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text-plain');

      // http://localdomain/anyUrlpassed
      console.log(`Incoming Request Type: ${req.method}`);
      const baseUrl = this.url.getBasePathUrl(req.url);

      res.end(baseUrl);
    });

    app.use('/', (req, res) => {
      res.send('Checking Root Path of Server');
    });

    server.listen(config.port, () => {
      logger.info(`Starting Node server at http://${config.host}:${config.port}`);

      if (config.env === 'debug') {
        process.argv.forEach((arg) => logger.debug(arg));
      }
    });

    const handleServerRejection = () => {
      if (server) {
        server.close(() => {
          logger.log(`Internal Server Error. Status code: 500, Server is under maintenance.`);
          process.exit(1);
        });
      }
    };

    const handleIncomingRequests = (error) => {
      logger.error(`Unauthorized Request, Status code: 401, Error code: ${error}`);
      handleServerRejection();
    };

    process.on('uncaughtException', handleIncomingRequests);
    process.on('unhandledRejection', handleServerRejection);
  }
}
