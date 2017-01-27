const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSCSS = new ExtractTextPlugin('css/style.css')
const extractHTML = new ExtractTextPlugin('index.html')

module.exports = {
  devtool: 'source-map',

  entry: [__dirname + '/app/app.jsx', __dirname + '/app/index.html' ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main:           'app/components/Main.jsx',
      Nav:            'app/components/Nav.jsx',
      NavLinks:       'app/components/NavLinks.jsx',
      Weather:        'app/components/Weather.jsx',
      WeatherForm:    'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About:          'app/components/About.jsx',
      Examples:       'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['','.js','.jsx']
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
    }),
    extractHTML,
    extractSCSS
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$/i, loaders: ['style', extractSCSS.extract(['css!postcss!sass'])] },
      { test: __dirname + '/app/index.html', loader:  extractHTML.extract(["html?" + JSON.stringify({ attrs: ["img:src"] })])  },
      // { test: /\.scss?$/, loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'file', 'url?limit=10000', 'img?minimize' ] },
      // { test: /\.css$/, loaders: [ 'file', 'extract', 'css' ] },
      // { test: __dirname + '/app/index.html', loaders: [ "file?name=[name].[ext]", "extract", "html?" + JSON.stringify({ attrs: ["img:src", "link:href"] }) ] },
    ]
  },
  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
  }
}
