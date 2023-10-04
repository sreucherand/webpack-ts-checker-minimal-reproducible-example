const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    historyApiFallback: true,
    hot: true,
  },

  devtool: 'eval-cheap-module-source-map',

  entry: path.join(__dirname, 'src/App.ts'),

  mode: 'development',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                "@babel/preset-typescript"
              ],
            },
          }
        ],
      }
    ]
  },

  stats: 'errors-warnings',

  output: {
    filename: 'static/js/bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin(),

    new ForkTsCheckerWebpackPlugin(),
  ]
}
