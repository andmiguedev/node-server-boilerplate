import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

export class Server {
  public setupNodeServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      // http://localdomain/anyUrlpassed
      console.log(`Incoming Request Type: ${req.method}`);
      const baseUrl = Url.getBasePathUrl(req.url);

      res.end();
    }).listen(8080);
    console.log(`Starting Node server on port 8080`);
  }
}

export class Url {
  public static getBasePathUrl(url: string | undefined): string {
    // Url must be valid
    if (url) {
      const parsedUrl = parse(url);
      console.log(`Incoming Request Url: ${url}`);
      return parsedUrl.pathname!.split('/')[1];
    }

    return '';
  }
}
