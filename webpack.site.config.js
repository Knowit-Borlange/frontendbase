const path = require('path');
const appBasePath = "./app/vue-js/";
const projectPath = '../';
const mockupPath = '../';

const outputPath = projectPath + "/Static/dist/vue-js";
const fonts = projectPath + "/Static/dist/fonts";
const imagesPath = './app/framework/images/';
const rootLayout = projectPath + 'Views/Shared/Layouts/';
const mockupDefaultLayout = mockupPath + 'app/framework/';

module.exports = {
  // Dist folder in our MVC project
  entry: appBasePath + 'app.ts',
  distFolder: path.resolve(__dirname, outputPath),
  fontsFolder: path.resolve(__dirname, fonts),
  appBasePath: appBasePath,
  // The public web path
  publicPath: "/Static/dist/vue-js/",
  nodeModulesPath: './node_modules/',
  componentPath: path.resolve(__dirname, appBasePath + 'components'),
  mixinsPath: path.resolve(__dirname, appBasePath + 'mixins'),
  modelsPath: path.resolve(__dirname, appBasePath + 'models'),
  utilPath: path.resolve(__dirname, appBasePath + 'util'),
  generatedPath: path.resolve(__dirname, appBasePath + 'generated/'),
  directives: path.resolve(__dirname, appBasePath + 'directives/'),
  rootLayoutDistFolder: path.resolve(__dirname, rootLayout),
  rootLayoutSrcFolder: path.resolve(__dirname, rootLayout + /templates/),
  rootLayoutTemplate: path.resolve(__dirname, rootLayout + '/templates/Root_Template.cshtml'),
  rootLayoutFile: path.resolve(__dirname, rootLayout + 'Root.cshtml'),
  scssEntryPath: './app/framework/scss/_vue-global.scss',
  siteLogoPath: imagesPath + 'favico.svg',
  mockupDefaultTemplate: path.resolve(__dirname, mockupDefaultLayout + 'default_template.html'),
  mockupDefaultFile: path.resolve(__dirname, mockupDefaultLayout + 'default.html'),

  //Webpack settings
  includeMockupTemplate: true,
  includeRootlayout: false,
  includeFavicons: false,
  bundleConfigAnalyzerMode: 'disabled', //server or disabled
  speedMeasurePluginDisabled: true
};
