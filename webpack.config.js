var webpack = require('webpack');

var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015","stage-2"]
          }
        }
      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ]
};
