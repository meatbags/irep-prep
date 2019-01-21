// modules
var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var MinifyPlugin = require("babel-minify-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// prefix
var appName = 'VVV';

// paths
var pathJS = './src/main.js';
var pathSCSS = './scss/main.js';
var pathOutput = 'presentation/dist';

module.exports = [{
  entry: {'app.min': pathJS},
  output: {
    library: appName,
    libraryTarget: 'var',
    path: path.resolve(__dirname, pathOutput),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [new MinifyPlugin({}, {comments: false})],
  stats: {colors: true, warnings: false}
}, {
  entry: {'style.webpack': pathSCSS},
  output: {
    path: path.resolve(__dirname, pathOutput),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {importLoaders: 2, sourceMap: true}
        }, {
          loader: 'sass-loader',
          options: {sourceMap: true}
        }
      ]
    }]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [new MiniCssExtractPlugin({filename: "./style.css", allChunks: true})]
}];
