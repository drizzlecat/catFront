const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // Use path.resolve for the output path to ensure it's an absolute path
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    // It's good practice to use path.resolve here as well
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // This line is uncommented and will match .js and .jsx files
        exclude: /node_modules/, // This line is uncommented to exclude node_modules
        use: {
          loader: 'babel-loader', // Tells webpack to use babel-loader for these files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use these Babel presets
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Specifies the HTML template to use
    })
  ],
  devServer: {
    static: {
      // Use path.resolve for the directory path to ensure it's correct
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3007, // The port on which the dev server will run
    hot: true
  }
};

