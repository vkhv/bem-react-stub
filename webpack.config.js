module.exports = {
  entry: ['./index.js'],
  output: {
    path: `/app/`,
    publicPath: `/app/`,
    filename: `index.js`
  },
  module: {
    loaders: [{
      test : /\.js$/,
      exclude : /node_modules/,
      loaders: ['webpack-bem', 'babel-loader']
    }, {
      test : /\.js$/,
      exclude : /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.png$/i,
      loader: 'url-loader?mimetype=image/png'
    }, {
      test: /\.gif$/i,
      loader: 'url-loader?mimetype=image/gif'
    }, {
      test: /\.svg$/i,
      loader: 'url-loader?mimetype=image/svg+xml'
    }, {
      test: /\.(ttf|eot|svg|woff|woff(2))(\?[a-z0-9]+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  bemLoader: {
    naming: {
      elem: '__',
      elemDirPrefix: '__',
      modDirPrefix: '_'
    },
    techs: ['js', 'css'],
    levels: [`${__dirname}/blocks`]
  },
  postcss: function() {
    return [
      require('postcss-import'),
      require('postcss-url')({url: 'rebase'}),
      require('postcss-browser-reporter'),
      require('postcss-reporter')
    ];
  },
  resolve: {
    alias: {
      bem: require.resolve(`${process.cwd()}/blocks/bem/bem`)
    }
  }
};
