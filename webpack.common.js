const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let fs = require("fs");
const toptal = fs.readFileSync(__dirname + "/toptal.html");

module.exports = {
  entry: {
    app: "./js/app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "./js/app.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      toptal,
    }),
  ],
};
