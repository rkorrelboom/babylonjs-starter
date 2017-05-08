import webpackCommon from './webpack.common'
import * as webpackMerge from 'webpack-merge';
import {DIST} from "./paths";

export default webpackMerge(webpackCommon, {

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: DIST,
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].chunk.js'
  }

});
