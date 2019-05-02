const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
console.log(path.resolve(__dirname, '../src/public'))
module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '../src/public'),
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'eval',
    devServer: {
        clientLogLevel: 'none',
        contentBase: '../dist',
        watchContentBase: true,
        disableHostCheck: true,
        stats: { colors: true },
        historyApiFallback: true,
        publicPath: '/',
        quiet: true,
        
        //hot: true   // no recarga el css

    }
})