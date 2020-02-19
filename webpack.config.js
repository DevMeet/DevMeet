const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    publicPath: "/build/",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|JPG|jpeg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            loader: "url-loader",
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};