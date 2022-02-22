import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';

const common = {
  entry: {
    index: join(__dirname, 'src', 'index.js')
  },
  plugins: [
    //create HTML file that includes reference to bundled js
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    alias: {
      '@': resolve('src'),
    }
  },
}

export default common;
