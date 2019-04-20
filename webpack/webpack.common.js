const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer =require('autoprefixer')
require('@babel/core')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    module:{
        rules: [
            { 
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
             {   
                test: /\.html$/,
               use:[{
                    loader: 'html-loader',
                    options: { minimaze: true}
                   }],
             },
            {
                use:[
                    'style-loader?sourceMap',
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                   
                    'resolve-url-loader', // requiere sourcemap en sass
                    'sass-loader?sourceMap'              
                ],
                test: /\.(css|scss)$/
            },
            {   
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use:[ 
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                            useRelativePath: true
                        }
                    },
                    'image-webpack-loader?bypassOnDebug' // option de optimizacion por defecto en produccion
                 ]
            },
            {
                test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
                use: 'file-loader?name=assets/[name].[ext]'
            },

        
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
              }
            
        })
    ]
}