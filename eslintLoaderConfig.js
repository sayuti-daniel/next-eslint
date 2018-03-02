const { join } = require("path");

module.exports = (config, { dir, eslintLoaderOptions }) => {
  const {
    eslintConfig = eslintLoaderOptions && eslintLoaderOptions.baseConfig,
    eslintIgnore
  } = require(join(dir, "package.json"));
  return {
    loader: "eslint-loader",
    options: Object.assign(
      {
        failOnError: true,
        ignore: Boolean(eslintIgnore),
        useEslintrc: typeof eslintConfig === "undefined"
      },
      eslintLoaderOptions,
      {
        baseConfig: eslintConfig
      }
    )
  };
};
