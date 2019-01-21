// modules
var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var MinifyPlugin = require("babel-minify-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var WebpackShellPlugin = require('webpack-shell-plugin-next');

// prefix
var appName = 'VVV';

// paths
var pathJS = './js/main.js';
var pathSCSS = './scss/main.js';
var pathOutput = 'dist';

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
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new MinifyPlugin({}, {comments: false}),
    new WebpackShellPlugin({
      onBuildExit:{
        scripts: ['%SYSTEMROOT%/System32/WindowsPowerShell/v1.0/powershell.exe -executionpolicy bypass -File dist.ps1'],
        blocking: false,
        parallel: true
      }
    })
  ],
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
