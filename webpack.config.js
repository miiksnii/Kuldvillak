import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        serveIndex: false,
      },
      {
        directory: path.join(__dirname, 'src/public'),
        publicPath: '/',
        serveIndex: false,
      },
    ],
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    watchFiles: ['src/**/*'],
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.mp3$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/public/favicon.png', to: '' },
      ],
    }),

  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  ignoreWarnings: [
    {
      module: /@vue[\\/]compiler-sfc/,
      message: /Critical dependency: require function is used/,
    },
  ],
};
