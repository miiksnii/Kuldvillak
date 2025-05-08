import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

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
    static: {
      directory: path.join(__dirname, 'dist'), // Serve only the built files
      serveIndex: false, // Disable directory listing
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    watchFiles: ['src/**/*'], // Watch for changes in src, but don't serve it
    historyApiFallback: true, // Prevents path-based traversal in SPAs
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
      type: 'asset/resource', // this will handle .mp3 files as resources
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ensure this path is correct
    }),
    new VueLoaderPlugin(), // Moved inside the single plugins array
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