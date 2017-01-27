const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [__dirname + '/app/app.jsx', __dirname + '/app/index.html' ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$/i, loaders: ['style', extractSCSS.extract(['css!postcss!sass'])] },
      { test: __dirname + '/app/index.html', loader:  extractHTML.extract(["html?" + JSON.stringify({ attrs: ["img:src"] })])  },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'file', 'url?limit=10000', 'img?minimize' ] }
    ]
  }
}
