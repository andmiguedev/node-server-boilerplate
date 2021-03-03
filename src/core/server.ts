import { createServer, IncomingMessage, ServerResponse } from 'http';

export class Server {
  public setupNodeServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      // http://localdomain/anyUrlpassed
      console.log(`Incoming Request for Parsing Url: ${req.url}`);
      res.end();
    }).listen(8080);
    console.log(`Starting Node server on port 8080`);
  }
}
