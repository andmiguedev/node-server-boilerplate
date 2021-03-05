import express from 'express';

// custom middlewares
const logger = require('../server/logger');
const local = require('../utils/environment');

const server: express.Application = express();

server.listen(local.port, () => {
  logger.info(`Starting Node server at http://${local.host}:${local.port}`);
});

export { server };
