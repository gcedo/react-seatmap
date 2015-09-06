import path from 'path';

export default {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'example.js')
    ],

    output: {
        path: path.resolve(__dirname, '.'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel?stage=0'],
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }
        ]
    }
}
