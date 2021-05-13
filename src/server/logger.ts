const winston = require('winston');
const config = require('../utils/environment');

const handleLoggingErrors = winston.format(info => {
  if (info instanceof Error) {
    Object.assign(info, {
      message: info.stack
    });
  }

  return info;
});

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    handleLoggingErrors(),
    config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(({
      level, message
    }) => `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
      handleExceptions: true,
    }),
  ],
});

export const handleMaintenanceMode = (server, error) => {
   if (server) {
    server.close(() => {
      logger.info('Server is currently under maintenance. Contact Administrators for server availability.');
      process.exit(1);
    });
   }
  
  logger.error(error);
}

module.exports = logger;
