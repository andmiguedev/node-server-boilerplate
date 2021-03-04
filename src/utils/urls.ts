import { parse } from 'url';

export class Url {
  public getBasePathUrl(url: string | undefined): string {
    // Url must be valid
    if (url) {
      const parsedUrl = parse(url);
      console.log(`Incoming Request Url: ${url}`);
      return parsedUrl.pathname!.split('/')[1];
    }

    return '';
  }
}
