import { Server } from './core/server';

class Launcher {
  private server: Server;

  constructor() {
    this.server = new Server();
  }

  public launchServer() {
    this.server.setupNodeServer();
  }
}

new Launcher().launchServer();
