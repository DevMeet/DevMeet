const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  // entry: {
  //   app: './src/js/index.js'
  // },
  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   publicPath: '/',
  //   filename: 'bundle.js'
  // },
  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   contentBase: path.resolve(__dirname, 'build'),
  //   // enable HMR on the devServer
  //   hot: true,
  //   // match the output 'publicPath'
  //   publicPath: '/build/',
  //   // fallback to root for other urls
  //   historyApiFallback: true,

  //   inline: true,

  //   headers: { 'Access-Control-Allow-Origin': '*' },

  //   proxy: {
  //     '/': 'http://localhost:3000'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css)|(scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf|jpg|gif)$/,
        use: ['url-loader?limit=10000']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
};
