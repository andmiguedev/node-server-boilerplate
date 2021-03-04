import { NodeServer } from '../server/requests';

class ServerLaunch {
  private nodeServer: NodeServer;

  constructor() {
    this.nodeServer = new NodeServer();
  }

  public start() {
    this.nodeServer.handleHTTPRequests();
  }
}

new ServerLaunch().start();
