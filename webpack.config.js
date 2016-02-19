'use strict';

// webpack.config.js

var webpack = require("webpack");
var path = require("path");

var config = {
  entry: {
    home : './static/home/app.jsx'
  },
  environment : 'development',
  output: {
    path: './build/',
    filename: '[name].js'
  },

  "externals": [
    {
      "react": "React",
      "react/addons": "React",
      "jQuery" : "jQuery"
    }
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.styl'],
    root: __dirname + '/static/'
  },
  'resolveLoader': {
    'root': '/node_modules/'
  }

};

module.exports = config;

