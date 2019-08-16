const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
	'webpack/hot/dev-server',
        'webpack-dev-server/client?http://52.56.180.211:8080',
        path.resolve(__dirname, 'example.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
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
