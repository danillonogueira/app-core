module.exports = {
  publicPath: 'http://localhost:8080/',
  chainWebpack: (config) => {
    config.plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [
        {
          name: 'app_core',
          remotes: {
            app_pkg_1: 'app_pkg_1@http://localhost:8081/remoteEntry.js',
            app_pkg_2: 'app_pkg_2@http://localhost:8002/remoteEntry.js'
          },
          filename: 'remoteEntry.js',
          shared: {
            vue: {
              eager: true,
              singleton: true,
            },
          },
        }
      ]);
  },
  devServer: {
    port: 8080
  },
};
