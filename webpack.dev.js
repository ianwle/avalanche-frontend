import { merge } from 'webpack-merge';
import common from './webpack.common';
import { resolve, join } from 'path';

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '/public/'),
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: join(__dirname, 'public'),
    },
    port: 5050,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ]
      }
    ]
  }
});

export default config;
