const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'developmet',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        },
        {
          test: /\.(sass|scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ]
    },
    node: {
      fs: 'empty'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './public/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        // new webpack.DefinePlugin({
        //   'process.env': JSON.stringify(require('./development'))
        // })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    }
};