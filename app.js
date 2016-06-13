import Server from './server.js'
import webpack from 'webpack';
import path from 'path';
import open from 'open';

import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import graphqlHTTP from 'express-graphql'
import schema from './data/index'






const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
