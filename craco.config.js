const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  webpack: {
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  }
}
