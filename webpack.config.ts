import path from "path";
import webpack from "webpack";

export default ({
  mode: "development",
  entry: './client/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  watch: true, 
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /\.test.tsx?$/
    }]
  }
});