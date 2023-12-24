const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const glob = require('glob');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/app.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist/js'),
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
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../index.html',
      inject: 'head',
      favicon: './assets/photos/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '../css/bundle.min.css',
    }),
    ...glob.sync('./pages/*.html').map((page) => {
      const pageName = path.basename(page, '.html');
      return new HtmlWebpackPlugin({
        template: page,
        filename: `../pages/${pageName}.html`,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeOptionalTags: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: 'head',
        favicon: './assets/photos/favicon.ico',
      });
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: '../assets' },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin(),
    ],
  },
};