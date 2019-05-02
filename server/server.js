const express = require('express')
const morgan = require('morgan')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const { mongoose } = require('./database')
const app = express()
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)

// Settings
app.set('port', process.env.PORT || 8080)

//Middlewares
app.use(webpackDevMiddleware(compiler, {
    
    contentBase: path.resolve(__dirname, '../src/public')
}))
app.use(webpackHotMiddleware(compiler))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Routes
app.use('/api/users', require('./routes'))

//Static Files
app.use(express.static(path.join(__dirname, '../src/public')))
console.log(path.join(__dirname, '../src/public'))

//Start Server
app.listen(app.get('port'), ()=>
console.log('>>>  🌎   Server on Port', app.get('port')))


