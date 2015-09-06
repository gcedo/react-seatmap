import path from 'path';
import webpack from 'webpack';

export default {
    entry: path.resolve(__dirname, 'src/build.js'),

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'react-seatmap'
    },
    externals: {
        'react': 'react'
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel?stage=0',
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
      },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
