var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  externals: nodeModules,
  module : {
    rules : [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                require('@babel/plugin-transform-runtime'),
                require('@babel/plugin-transform-async-to-generator'),
                require('@babel/plugin-syntax-dynamic-import'),
                require('@babel/plugin-syntax-import-meta'),
                require('@babel/plugin-proposal-class-properties'),
                require('@babel/plugin-proposal-json-strings')
              ]
            }
          }
        }
      ]
  }
}