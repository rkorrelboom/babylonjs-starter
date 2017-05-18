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
  }

  public listen(port: number) {
    this.server = http.createServer(this.express);

    this.server.listen(port, () => {
      log(`listening at http://localhost:${port}`);
    });
  }

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
      }));

      this.express.use('/assets', express.static('src/client/assets'));
    } else {
      this.express.use('/', express.static(DIST));
    }
  }

}

export default Server;
