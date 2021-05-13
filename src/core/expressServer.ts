import express from 'express';
import { handleMaintenanceMode } from './../server/logger';

const { createLightship } = require('lightship');

// custom middlewares
const logger = require('../server/logger');
const local = require('../utils/environment');
const server: express.Application = express();

// Lightship will start a HTTP service on port 9000
const lightship = createLightship();

const handleFailedRequests = (serverError) => {
  logger.error(`Unexpected error has occured. Error: ${serverError}`);
  handleMaintenanceMode(server, serverError);
}

server
  .listen(local.port, () => {
    logger.info(`Starting Node server at https://${local.host}:${local.port}`);
    // Lightship default state is "SERVER_IS_NOT_READY". Therefore, you must signal
    // that the server is now ready to accept connections.
    lightship.signalReady();

    // Use it to connect to Mongodb
    // mongo.connection();
  })
  .on('error', () => {
    process.on('uncaughtException', handleFailedRequests);
    process.on('unhandledRejection', handleFailedRequests);
    lightship.shutdown();
  });

export { server };
