const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
console.log(path.resolve(__dirname, "../src/public"));
module.exports = merge(common, {
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "../src/public"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "eval-source-map", //"eval",
  devServer: {
    clientLogLevel: "none",
    contentBase: "../dist",
    watchContentBase: true,
    disableHostCheck: true,
    stats: { colors: true },
    historyApiFallback: true,
    publicPath: "/",
    quiet: true,

    //hot: true   // no recarga el css
  },
});
