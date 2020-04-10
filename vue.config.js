const path = require('path');
const appConfig = require('./src/app.config');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  configureWebpack: {
    name: appConfig.NAME,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};
