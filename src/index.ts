const express = require('express');
import { Request, Response } from 'express';

const server = new express();
const logger = require('./server/logger');
const local = require('./utils/environment');

server.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Express Server Home Route',
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
});

if (require.main === module) {
  server.listen(8080, () => {
    logger.info(`Starting Node server at http://${local.host}:${local.port}`);
  });
}

if (local.env === 'debug') {
  process.argv.forEach((arg) => logger.debug(arg));
}
