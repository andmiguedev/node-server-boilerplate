import settingsMiddleware from './settings';

export default function registerMiddlewares(server) {
  settingsMiddleware(server);
}
