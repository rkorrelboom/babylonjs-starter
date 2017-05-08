import * as webpack from "webpack";
import {CLIENT, SRC} from "./paths";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: {
    'vendor': './src/client/vendor.ts',
    'app': './src/client/main.ts'
  },

  resolve: {
    modules: ['node_modules', SRC],
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      use: 'file-loader?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        PORT: JSON.stringify(process.env.PORT),
        DEBUG: JSON.stringify(process.env.DEBUG),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        HOST: JSON.stringify(process.env.HOST)
      }
    }),
    new HtmlWebpackPlugin({
      template: `${CLIENT}/index.html`
    })
  ]
};
