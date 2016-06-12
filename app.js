import Server from './server.js'
const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  import webpack = from 'webpack'
  import webpackDevMiddleware = from 'webpack-dev-middleware'
  import webpackHotMiddleware = from 'webpack-hot-middleware'
  import config = from './webpack.dev.config.js'
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
