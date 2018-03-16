module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      if (!options.isServer) {
        const { eslintLoaderOptions } = nextConfig;
        options.defaultLoaders.eslint = {
          loader: "eslint-loader",
          options: Object.assign({ failOnError: true }, eslintLoaderOptions)
        };

        config.module.rules.push({
          enforce: "pre",
          test: /\.jsx?$/,
          use: options.defaultLoaders.eslint
        });
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};
