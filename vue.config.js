module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: 'app_core',
        remotes: {
          stats: "app_pkg_1@http://localhost:8000/remoteEntry.js",
        },
      }]);
  },
};
