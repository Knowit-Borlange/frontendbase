/* https://www.npmjs.com/package/speed-measure-webpack-plugin */
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


const SiteConfig = require('./webpack.site.config');
const CommonConfig = require("./webpack.common.js");
const { merge } = require('webpack-merge');

const smp = new SpeedMeasurePlugin({ disable: SiteConfig.speedMeasurePluginDisabled });

module.exports = smp.wrap(merge(CommonConfig, {
  mode: "production",
  devtool: false,
  output: {
    filename: "script/[name].[contenthash].js",
    path: SiteConfig.distFolder,
    publicPath: SiteConfig.publicPath,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
              comments: false,
          },
      },
      extractComments: false,
      parallel: true,
      })
    ],
  }
}));
