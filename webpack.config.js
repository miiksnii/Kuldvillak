// webpack.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';

// Needed because `__dirname` is not available in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

export default {
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
    open:true
  },
  module: {
    rules: [

    ],
  },
};
