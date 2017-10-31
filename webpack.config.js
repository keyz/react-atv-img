var path = require('path');
var webpack = require('webpack');

var constPlugin = new webpack.DefinePlugin({
  '__DEV__': JSON.stringify(JSON.parse(process.env.DEV || 'false'))
});

var config = {};

if (process.env.NODE_ENV === 'production') {
  config = {
    devtool: 'eval',
    entry: [
      './example/src'
    ],
    output: {
      path: path.join(__dirname, 'dist', 'static'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      constPlugin,
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ],
  }
}

module.exports = Object.assign({}, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './example/src'
  ],
  output: {
    path: path.join(__dirname, 'dist', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    constPlugin,
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      'react-atv-img': path.join(__dirname, 'src')
    },
    extensions: ['*', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: ["./node_modules"]
      },
    ]
  }
}, config);
