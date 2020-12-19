const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = "development";
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "css/[name].[contenthash:8].css",
      chunkFilename: isDevelopment
        ? "[name].css"
        : "css/[name].[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
// const plugins =  [
//     new MiniCssExtractPlugin({
//       filename: "css/[name].[contenthash:8].css",
//       chunkFilename: "css/[name].[contenthash:8].css",
//     }),
//     new HtmlWebpackPlugin({
//       inject: true,
//       template: "./src/public/index.html",
//       minify: {
//         collapseWhitespace: true,
//         removeComments: true,
//         removeRedundantAttributes: true,
//         removeScriptTypeAttributes: true,
//         removeStyleLinkTypeAttributes: true,
//         useShortDoctype: true,
//         minifyJS: true,
//         minifyCSS: true,
//         minifyURLs: true,
//       },
//     }),
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: JSON.stringify("development"),
//       },
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//   ],
