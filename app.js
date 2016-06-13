import Server from './server.js'
import webpack from 'webpack';
import path from 'path';
import open from 'open';

import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import graphqlHTTP from 'express-graphql';

// const api = ('../api/index');
// const schema = ('../data/index');
//


import mongoose from 'mongoose';

const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost:/property-manager'
mongoose.connect(MONGOURL, err => {
  console.log(err || `Connected to MongoDB at ${MONGOURL}`);
});

const port = (process.env.PORT || 8080);

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

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
//
// app.use('/api', api);
//
// app.use('/graphql', graphqlHTTP ({
//   schema:schema,
//   pretty: true,
//   graphql: true
// }))
//
//
// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
