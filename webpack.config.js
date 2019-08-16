const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    }
}
