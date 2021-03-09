const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: "development",
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 2048
  },
  entry: {
    websocket: ['./ws/browser/index.js'],
    worker: ['./ws/browser/worker.js'],
    iframe: ['./ws/browser/iframe.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: [".js"],
    alias: {
      '@': path.join(__dirname, '../src'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
        filename: 'websocket.html',
        template: './ws/browser/index.html',
        chunks: ['websocket'],
        title: 'websocket',
    }),
    new HtmlWebpackPlugin({
      filename: 'iframe.html',
      template: './ws/browser/iframe.html',
      chunks: ['iframe'],
      title: 'iframe',
  }),
    new CleanWebpackPlugin(),
]
}

module.exports = config;