const simpleCert = require('node-simple-cert');

const { key, cert } = simpleCert({
  dataDir: '/cert',
  commonName: 'node-restful-server.net',
  email: 'support@alumina-web.net',
  production: false,
  serverHost: 'localhost',
  serverPort: '8080',
});

export { key, cert };
