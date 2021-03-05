const cors = require('cors');
const helmet = require('helmet');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');

export default (server) => {
  server.use(cors());
  server.use(helmet());

  server.use(
    basicAuth({
      users: { admin: 'password' },
      unauthorizedResponse: (req: Request) => {
        return `Unauthorized request: ${req.mode}`;
      },
      challenge: true,
    })
  );

  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  server.use(bodyParser.json());
};
