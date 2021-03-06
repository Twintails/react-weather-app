const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSCSS = new ExtractTextPlugin('css/style.css')
const extractHTML = new ExtractTextPlugin('index.html')

const webpack = require('webpack')

const PORT = process.env.PORT || 3001;

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    __dirname + '/app/app.jsx',
    __dirname + '/app/index.html'
  ],
  output: {
    path: __dirname + "/public",
    filename: '/js/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      apiKey:         'apiKey.json',
      Main:           'app/components/Main.jsx',
      Nav:            'app/components/Nav.jsx',
      NavLinks:       'app/components/NavLinks.jsx',
      Weather:        'app/components/Weather.jsx',
      WeatherForm:    'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About:          'app/components/About.jsx',
      Examples:       'app/components/Examples.jsx',
      ErrorModal:     'app/components/ErrorModal.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  devtool: "source-map",
  devServer: { 'content-base': __dirname + 'public',  inline: true, hot: true, port: PORT },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$/i, loaders: ['style', extractSCSS.extract(['css!postcss!sass'])] },
      { test: __dirname + '/app/index.html', loader:  extractHTML.extract(["html?" + JSON.stringify({ attrs: ["img:src"] })])  },
      // { test: /\.scss?$/, loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'] },
      { test: /\.(jpe?g|png|gif|svg|ico)$/i, loaders: [ 'file', 'url?limit=10000', 'img?minimize' ] },
      // { test: /\.css$/, loaders: [ 'file', 'extract', 'css' ] },
      // { test: /\.json/, loaders: [ 'file', 'extract', 'json' ] },
      // { test: __dirname + '/app/index.html', loaders: [ "file?name=[name].[ext]", "extract", "html?" + JSON.stringify({ attrs: ["img:src", "link:href"] }) ] },
    ],
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    }),
    extractHTML,
    extractSCSS
  ],
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
