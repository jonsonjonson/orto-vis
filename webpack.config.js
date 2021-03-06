// Node
var path = require('path');

// NPM
var webpack = require('webpack');

// Webpack Plugins
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var DedupePlugin = webpack.optimize.DedupePlugin;
var DefinePlugin = webpack.DefinePlugin;



/*
 * Config
 */
module.exports = {
  devtool: 'eval',
  debug: true,
  cache: true,

  verbose: true,
  displayErrorDetails: true,
  context: __dirname,
  stats: {
    colors: true,
    reasons: true
  },

  // our Development Server config
  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true,
    contentBase: 'src/public/',
    publicPath: '/'
  },

  //
  entry: {
    'angular2': [
      // Angular 2 Deps
      '@reactivex/rxjs',
      'zone.js',
      'reflect-metadata',
      // to ensure these modules are grouped together in one file
      'angular2/angular2',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ],
    'app': [
      // App

      // './examples/  /bootstrap' <-- view examples

      // './examples/rx-autosuggest/bootstrap'
      // './examples/rx-draggable/bootstrap'
      // './examples/rx-timeflies/bootstrap'
      // './examples/game-tictactoe/bootstrap'
      // './examples/simple-component/bootstrap'
      // './examples/simple-todo/bootstrap'
      // './examples/large-app/bootstrap'

      './src/app/bootstrap'
    ]
  },

  // Config for our build files
  output: {
    path: '__build__',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
      // publicPath: 'http://mycdn.com/'
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json'],
    alias: {
      'rx': '@reactivex/rxjs',

      'common': 'src/app/common',
      // 'bindings': 'src/bindings',
      'components': 'src/app/components'
        // 'services': 'src/app/services',
        // 'stores': 'src/app/stores'
    }
  },

  module: {
    loaders: [
      // Support for *.json files.
      {
        test: /\.json$/,
        loader: 'json'
      },

      // Support for CSS as raw text
      {
        test: /\.css$/,
        loader: 'raw'
      },

      // Support for Sass as raw text
      {
        test: /\.scss$/,
        loader: 'raw!sass'
      },

      // support for .html as raw text
      {
        test: /\.html$/,
        loader: 'html',
        // loader: 'html?attrs=img:src img:data-src img:data-src-retina',
        query: {
          attrs: ['img:src', 'img:data-src', 'img:data-src-retina'],
          minimize: false,
          // Teach html-minifier about Angular 2 syntax
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/],
        }
      },

      // support for images as raw text
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'url?limit=10000'
      },


      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          'ignoreDiagnostics': [
            // 2300, // 2300 -> Duplicate identifier
            // 2309 // 2309 -> An export assignment cannot be used in a module with other exported elements.
          ]
        },
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
          /node_modules/
        ]
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/
    ]
  },
  // htmlLoader: {
  //   ignoreCustomFragments: [/\[ng-class]\ /, /\[router-link]\ /, /\{\{.*?}}/]
  // },

  plugins: [
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
      filename: 'angular2.js'
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   mangle: false
    // })
  ],

  /*
   * When using `templateUrl` and `styleUrls` please use `__filename`
   * rather than `module.id` for `moduleId` in `@View`
   */
  node: {
    crypto: false,
    __filename: true
  }
};
