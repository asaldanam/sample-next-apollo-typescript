module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: dev,
          // eslint options (if necessary)
        },
      });
    }
    return config;
  },
};
