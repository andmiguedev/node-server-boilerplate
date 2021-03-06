const mongoose = require('mongoose');
const local = require('../utils/environment');

const connection = () => {
  const logger = require('../server/logger');

  mongoose.connection.on('error', (error) => {
    logger.error(`Unable to make a connection. Error: ${error}`);
    process.exit(1);
  });

  mongoose
    .connect(local.mongodb, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => logger.info('Connected to Mongo DB Atlas Cloud'));
};

module.exports = { connection };
