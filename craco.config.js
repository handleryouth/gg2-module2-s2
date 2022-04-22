const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  webpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.swcMinify
        })
      ],
      runtimeChunk: true,
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false
    },
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  }
}
