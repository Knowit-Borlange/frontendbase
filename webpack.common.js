/// <binding ProjectOpened='Run - Development' />
/* eslint-disable */

const path = require('path');
const SiteConfig = require('./webpack.site.config');
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
// https://github.com/webpack/webpack/issues/2031
var excludeNodeModulesExcept = function (modules) {
  var pathSep = path.sep;
  if (pathSep == '\\') // must be quoted for use in a regexp:
    pathSep = '\\\\';
  var moduleRegExps = modules.map(function (modName) { return new RegExp("node_modules" + pathSep + modName) })

  return function (modulePath) {
    if (/node_modules/.test(modulePath)) {
      for (var i = 0; i < moduleRegExps.length; i++)
        if (moduleRegExps[i].test(modulePath)) {
          console.log('Transpile node module:  ' + modulePath);
          return false;
        }

      return true;
    }
    return false;
  };
};


module.exports = {
  performance: {
    hints: 'warning'
  },

  //entry: jsEntries,
  // If we wanna use a single vue file for all code, put all common logic in a app.js
  //entry: commonPolyfills.concat(SiteConfig.entry),
  entry: SiteConfig.entry,
  output: {
    path: path.resolve(__dirname, SiteConfig.distFolder),
    filename: "script/[name].js",
    publicPath: SiteConfig.publicPath
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: false,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@import "${SiteConfig.scssEntryPath}";`,
          },
        },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          }
        },
      },
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'app'),
        use: {
          loader: "vue-loader",
          options: {
            js: "babel-loader",
            ts: 'babel-loader!ts-loader',
            esModule: true
          }
        }
      },
      // Javascript
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: excludeNodeModulesExcept(["arrify", "dot-prop", "is-obj", "sort-on",]), // https://github.com/webpack/webpack/issues/2031
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            require("@babel/plugin-transform-arrow-functions"),
          ]
        }
      },
    ]
  },
  resolve: {
    symlinks: false, // We do not user symlinks so set to false to speed up builds
    extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@components': SiteConfig.componentPath,
      '@mixins': SiteConfig.mixinsPath,
      '@models': SiteConfig.modelsPath,
      '@generated': SiteConfig.generatedPath,
      '@directives': SiteConfig.directives,
      '@util': SiteConfig.utilPath
    }
  },
  stats: {
    warningsFilter: /export .* was not found in/
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    ...(SiteConfig.includeMockupTemplate ? [
          new HtmlWebpackPlugin({
            // Place script tags at the end of <body>
            inject: "body",
            filename: SiteConfig.mockupDefaultFile,
            template: SiteConfig.mockupDefaultTemplate,
            publicPath: '../vue-js/',
            hash: false,
            minify: false,
            scriptLoading: 'defer'
          })
    ] : []),
    ...(SiteConfig.includeRootlayout ? [
      new HtmlWebpackPlugin({
          // Place script tags at the end of <body>
          inject: "body",
          filename: SiteConfig.rootLayoutFile,
          template: SiteConfig.rootLayoutTemplate,
          hash: true,
          minify: false,
          scriptLoading: 'defer'
        })
  ] : []),
  ...(SiteConfig.includeFavicons ? [
      new FaviconsWebpackPlugin({
        logo: SiteConfig.siteLogoPath,
        inject: true,
        favicons: {
          developerURL: null, // prevent retrieving from the nearest package.json
          background: '#27374000',
          theme_color: '#27374000'
        }
      })
  ] : []),
    new MiniCssExtractPlugin({
      filename: '/css/[name].[contenthash:8].css'
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: SiteConfig.bundleConfigAnalyzerMode
    })

  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'multiple',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](!vue.esm-bundler.js)/,
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true
        },
        common: {
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: 'all',
          minSize: 0
        }
      }
    }
  },
  stats: { colors: true }
};
