/* https://www.npmjs.com/package/speed-measure-webpack-plugin */
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const SiteConfig = require('./webpack.site.config');
const CommonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');

const smp = new SpeedMeasurePlugin({ disable: SiteConfig.speedMeasurePluginDisabled }); // when disable: true this plugin does nothing
module.exports = smp.wrap(merge(CommonConfig, {

    mode: "development",

    devtool: "eval-cheap-module-source-map",

    output: {
        path: SiteConfig.distFolder,
        publicPath: SiteConfig.publicPath,
        filename: "script/[name].js",
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            // eslint: true
        }),
        new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript', excludeWarnings: false }),
    ]

}));
