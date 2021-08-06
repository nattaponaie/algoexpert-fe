const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx', // our entry point, as mentioned earlier
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
        loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
        exclude: /node_modules/,
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
        // enable parallel running
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new webpack.optimize.SplitChunksPlugin(),
  ],
};
