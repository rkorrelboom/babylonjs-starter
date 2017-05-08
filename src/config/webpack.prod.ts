import {NoEmitOnErrorsPlugin, optimize} from "webpack";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import commonConfig from "./webpack.common";
import * as webpackMerge from "webpack-merge";
import {DIST, ASSETS} from "./paths";

export default webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: DIST,
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new NoEmitOnErrorsPlugin(),
    new optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: ASSETS, to: `${DIST}/assets` },
    ])
  ]
});
