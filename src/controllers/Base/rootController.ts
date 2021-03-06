const getBrowserData = (req: Request) => ({
  method: req.method,
  mode: req.mode,
  headers: req.headers,
  baseUrl: req.url,
  signal: req.signal,
});

const getBaseRequest = async (req, res) => {
  res.json(getBrowserData(req));
};

export const rootController = {
  getBrowserData,
  getBaseRequest,
};
