import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: express.Application = express();

import { adminRoutes } from './routes/index';

const logger = require('./server/logger');
const local = require('./utils/environment');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// API Routes
// app.use('/', (req: Request, res: Response) => {
//   res.send({
//     message: 'GET /welcome to node server',
//   });
// });

app.use('', adminRoutes);

app.listen(local.port, () => {
  logger.info(`Starting Node server at http://${local.host}:${local.port}`);
});
