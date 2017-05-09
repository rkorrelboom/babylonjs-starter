import * as express from "express";
import * as http from 'http'
import * as debug from "debug";
import webpackDevelopmentConfig from "../config/webpack.dev";
import {DIST} from "../config/paths";

const log = debug('app:server');

class Server {

  public express: express.Application;
  private server: http.Server;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  public listen(port: number) {
    this.server = http.createServer(this.express);

    this.server.listen(port, () => {
      log(`listening at http://localhost:${port}`) // eslint-disable-line
    });

  }

  // Configure Express middleware.
  private middleware(): void {
    if (process.env.NODE_ENV === 'development') {
      const webpack = require('webpack');
      const compiler = webpack(webpackDevelopmentConfig);

      this.express.use(require('webpack-dev-middleware')(compiler, {
        quiet: false,
        noInfo: true,
        lazy: false,
        stats: {
          colors: true,
          chunks: false,
          chunkModules: false
        },
        publicPath: compiler.options.output.publicPath
      }))

      // this.express.use(require('webpack-hot-middleware')(compiler));

      this.express.use('/assets', express.static('src/client/assets'));
    } else {
      this.express.use('/', express.static(DIST));
    }
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    // this.express.use('/', router);
  }

}

export default Server;
