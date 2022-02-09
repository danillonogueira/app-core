module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: 'app_core',
        remotes: {
          app_pkg_1: "app_pkg_1@http://localhost:8000/remoteEntry.js",
        },
        filename: "remoteEntry.js",
        shared: {
          vue: {
            eager: true,
            singleton: true,
          },
        },
      }]);
  },
};
