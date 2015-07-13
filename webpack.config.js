module.exports = {
  context: __dirname + "/app",
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  },
  module: {
	  loaders: [
	    {
	      test: /\.jsx$/,
	      exclude: /node_modules/,
	      loaders: ["babel-loader"],
	    }
	  ],
  },
}