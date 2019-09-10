const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x|$)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
