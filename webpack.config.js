var path = require("path");

module.exports = ["eval-source-map"].map((devtool) => ({
  mode: "development",
  entry: {
    bundle: "./index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: `./[name]-${devtool}.js`,
  },
  devtool,
  optimization: {
    runtimeChunk: true,
  },
}));
