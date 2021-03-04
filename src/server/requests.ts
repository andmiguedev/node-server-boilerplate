import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Url } from '../utils/urls';

export class NodeServer {
  private url: Url;

  constructor() {
    this.url = new Url();
  }

  public handleHTTPRequests() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text-plain');

      // http://localdomain/anyUrlpassed
      console.log(`Incoming Request Type: ${req.method}`);
      const baseUrl = this.url.getBasePathUrl(req.url);
      res.end(baseUrl);
    });
  }
}
