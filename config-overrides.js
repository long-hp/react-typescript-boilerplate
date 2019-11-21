const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EditRuntimeFile = require('./webpack-plugins/EditRuntimeFile');
const CreateLazyComponent = require('./webpack-plugins/CreateLazyComponent');

const configuration = {
  jsOutput: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  cssOutput: {
    filename: 'static/css/[name].css',
    chunkFilename: 'static/css/[name].chunk.css',
  },
  vendor: {
    filename: 'static/js/vendors/vendor-[name].js',
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
        if (
          !(
            item.options &&
            item.options.filename &&
            item.options.filename.includes('.css')
          )
        ) {
          return item;
        }
        return new MiniCssExtractPlugin({
          filename: configuration.cssOutput.filename,
          chunkFilename: configuration.cssOutput.chunkFilename,
        });
      }),
      new EditRuntimeFile({
        filename: 'build/static/js/runtime.js',
        pathChange: '__HSBLOG__.templateURL',
      }),
      new webpack.IgnorePlugin(/redux-logger/),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        maxInitialRequests: Infinity,
        minSize: 10000,
        chunks(chunk) {
          return !chunk.name.includes('Lazy');
        },
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            filename: configuration.vendor.filename,
            chunks(chunk) {
              return chunk.name === 'main';
            },
            name(module, chunks, cacheGroupKey) {
              const moduleFileName = module
                .identifier()
                .split('/')
                .reduceRight(item => item);
              const allChunksNames = chunks.map(item => item.name).join('~');
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1];
              return type === 'function'
                ? `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`
                : packageName.replace('@', '');
            },
          },
        },
      },
    },
  };
}

function rewireDevelopment(config) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new CreateLazyComponent({
        input: 'src/components',
        output: 'src/components/lazies',
        autoDeleteFileEnabled: true,
      }),
    ],
    // resolve: {
    //   ...config.resolve,
    //   alias: {
    //     ...config.resolve.alias,
    //     "@components": resolve("src/components"),
    //     "@utils": resolve("src/utils"),
    //     "@constants": resolve("src/constants")
    //   }
    // }
  };
  // return {
  //   ...config,
  //   module: {
  //     ...config.module,
  //     rules: config.module.rules.map(rule => {
  //       if (!rule.oneOf) {
  //         return rule;
  //       }
  //       return {
  //         ...rule,
  //         oneOf: rule.oneOf.map(item => {
  //           const condition =
  //             item.test && item.test.toString().includes("/\\.(scss|sass)$/");
  //           if (!condition) {
  //             return item;
  //           }
  //           return {
  //             ...item,
  //             use: item.use.map(useItem => {
  //               if (
  //                 !(useItem.loader && useItem.loader.includes("sass-loader"))
  //               ) {
  //                 return useItem;
  //               }
  //               return {
  //                 ...useItem,
  //                 options: {
  //                   importLoaders: 2,
  //                   sourceMap: true
  //                 }
  //               };
  //             })
  //           };
  //         })
  //       };
  //     })
  //   }
  // };
}

module.exports = function override(config, env) {
  const isDev = env === 'development';
  if (isDev) {
    return rewireDevelopment(config);
  }
  return rewireProduction(config);
};
