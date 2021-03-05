// Experimenral Async warapper for incoming request and responses to the Server, errors are handle in next request
export const asyncRequests = (func) => (req, res, next) => func(req, res).catch(next);
