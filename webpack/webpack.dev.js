const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: '../dist',
        disableHostCheck: true,
        stats: { colors: true },
        historyApiFallback: true,
        publicPath: '/',
        quiet: true,
        hot: true

    }
})