const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const configuration = {
  jsOutput: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  cssOutput: {
    filename: 'static/css/[name].css',
    chunkFilename: 'static/css/[name].chunk.css',
  },
};

function rewireProduction(config, type) {
  return {
    ...config,
    devtool: false,
    output: {
      ...config.output,
      filename: configuration.jsOutput.filename,
      chunkFilename: configuration.jsOutput.chunkFilename,
    },
    plugins: [
      ...config.plugins.map((item, index) => {
        if (!(item.options && item.options.filename && item.options.filename.includes('.css'))) {
          return item;
        }
        return new MiniCssExtractPlugin({
          filename: configuration.cssOutput.filename,
          chunkFilename: configuration.cssOutput.chunkFilename,
        });
      }),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        maxInitialRequests: Infinity,
        minSize: 40000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks(chunk) {
              return chunk.name === 'main';
            },
            name(module, chunks, cacheGroupKey) {
              const moduleFileName = module
                .identifier()
                .split('/')
                .reduceRight(item => item);
              const allChunksNames = chunks.map(item => item.name).join('~');
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return type === 'function' ? `${cacheGroupKey}-${allChunksNames}-${moduleFileName}` : packageName.replace('@', '');
            },
          },
        },
      },
    },
  };
}

function rewireDevelopment(config) {
  return config;
}

module.exports = function override(config, env) {
  const isDev = env === 'development';
  if (isDev) {
    return rewireDevelopment(config);
  }
  return rewireProduction(config);
};
