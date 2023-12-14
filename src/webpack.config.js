const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/app.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, '../dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: path.resolve(__dirname, 'styles'),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/bundle.min.css',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
