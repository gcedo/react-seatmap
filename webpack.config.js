const path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/build.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'react-seatmap'
    },
    externals: {
        'react': 'react'
    },
    module: {
      rules: [
        { test: /\.css$/, use: 'css-loader' },
        {
          test: /\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
          ],
        },
        {
          exclude: /node_modules/, // don't transpile node_modules
          test: /\.jsx$/,          // do transpile any files ending in .jsx
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-react-jsx']
            }
          }
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
