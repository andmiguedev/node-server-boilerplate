import express from 'express';
const { createLightship } = require('lightship');

// custom middlewares
const logger = require('../server/logger');
const local = require('../utils/environment');
// const mongo = require('../databases/mongo');

const server: express.Application = express();

// Lightship will start a HTTP service on port 9000
const lightship = createLightship();

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
    lightship.shutdown();
  });

export { server };
