const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:8].js",
    chunkFilename: "js/[name].[contenthash:8].chunk.js",
    pathinfo: false,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
    emitOnErrors: true,
    // minimize: true,
    // minimizer: [
    //   // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
    //   // `...`
    //   new CssMinimizerPlugin(),
    // ],
    // removeAvailableModules: false,
    // removeEmptyChunks: false,
    // splitChunks: false,
    // runtimeChunk: true,
  },
  // devtool: "source-map",
});
