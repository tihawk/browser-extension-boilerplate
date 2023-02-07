const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const browser = process.env.BROWSER || 'chrome'
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
      content: path.resolve(__dirname, "..", "src", "content.ts"),
      popup: path.resolve(__dirname, "..", "src", "popup.ts"),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [
            {from: '.', to: '.', context: 'public/views'},
            {from: '.', to: '.', context: 'public/images'},
            {from: `${browser}_manifest.json`, to: '../dist/manifest.json', context: 'public/manifest'}
        ]
      }),
      new Dotenv(),
   ],
}