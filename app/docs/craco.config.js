webpackConfig.devServer = (devServerConfig) => {
  // Translate CRA's legacy webpack-dev-server v4 hooks to v5 setupMiddlewares
  const beforeMw = devServerConfig.onBeforeSetupMiddleware;
  const afterMw = devServerConfig.onAfterSetupMiddleware;
  delete devServerConfig.onBeforeSetupMiddleware;
  delete devServerConfig.onAfterSetupMiddleware;

  // v4 -> v5: `https` becomes `server: { type: 'https' }`
  if (Object.prototype.hasOwnProperty.call(devServerConfig, "https")) {
    const https = devServerConfig.https;
    delete devServerConfig.https;
    if (https) {
      devServerConfig.server = typeof https === "object"
        ? { type: "https", options: https }
        : { type: "https" };
    }
  }
  if (Object.prototype.hasOwnProperty.call(devServerConfig, "http2")) {
    delete devServerConfig.http2;
  }

  const userSetup = devServerConfig.setupMiddlewares;
  devServerConfig.setupMiddlewares = (middlewares, devServer) => {
    if (beforeMw) beforeMw(devServer);
    let mws = middlewares;
    if (userSetup) mws = userSetup(mws, devServer);
    if (afterMw) afterMw(devServer);
    return mws;
  };

  if (config.enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      let mws = middlewares;
      if (originalSetupMiddlewares) {
        mws = originalSetupMiddlewares(mws, devServer);
      }
      setupHealthEndpoints(devServer, healthPluginInstance);
      return mws;
    };
  }

  devServerConfig.allowedHosts = "all";

  return devServerConfig;
};