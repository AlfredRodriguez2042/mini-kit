const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const { plugins } = require("./webpack.plugins");

require("@babel/core");

const isDevelopment = "development";
const isProduction = "production";
module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".json", ".html"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx|json)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        use: [
          { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: false },
          },
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    postcssPresetEnv({
                      browsers: "last 2 versions",
                      autoprefixer: {
                        flexbox: "no-2009",
                      },
                    }),
                    autoprefixer,
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },

          { loader: "resolve-url-loader" }, // requiere sourcemap en sass
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        test: /\.(css|scss)$/i,
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              useRelativePath: true,
            },
          },
        ],
      },
      {
        loader: "image-webpack-loader",
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
        },
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        //   use: "file-loader?name=assets/[name].[ext]",
        loader: "file-loader",
        options: "assets/[path][name].[ext]",
      },
    ],
  },

  plugins,
};
