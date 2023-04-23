const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './application/home.js',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'build'),
  // },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        type: 'asset/source',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // devServer: {
  //   port: 4001,
  //   host: '0.0.0.0',
  //   allowedHosts: ['.cc-propeller.cloud'],
  //   publicPath: path.join(__dirname, 'dist'),
  // }
};
