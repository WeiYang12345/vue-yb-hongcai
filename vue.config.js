const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

const assetsDir = 'statics'
const isProduction = process.env.NODE_ENV === 'production'
const CompressionPlugin = require("compression-webpack-plugin")
const timeStamp = new Date().getTime()
function version() {
  let date = new Date();
  let YYYY = date.getFullYear().toString();
  let MM = (date.getMonth() + 1).toString();
  let DD = date.getDate().toString();
  let strMM = MM > 9 ? MM.toString() : '0' + MM.toString();
  let strDD = DD > 9 ? DD.toString() : '0' + DD.toString();
  return ( YYYY + strMM + strDD);
}

module.exports = {
  // devServer: {
  //   port: 80,
  //   host: "www.ipx-king.me",
  //   host: "hc.ipx-king.me",
  //   disableHostCheck: true
  // },
  publicPath:process.env.NODE_ENV==='production'?'./':'/',
  productionSourceMap: false,
  assetsDir,
  outputDir: 'pdist',
  configureWebpack: (config) => {
    if (isProduction) {
      config.plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/,  // 需要压缩的文件类型
          threshold: 10240,         // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
          deleteOriginalAssets: false,      // 是否删除原文件
          minRatio: 0.8
        })
      );
    }
    
  },

  chainWebpack: (config) => {
    config.plugins
      .delete('prefetch')
      // .delete('preload')
      .end();
    config.resolve.alias
      .set('@img', resolve('src/assets/img'))
      .set('@js', resolve('src/assets/js'))
      .end()
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
    config.when(isProduction, config => 
       config.output
        .set('filename', `${assetsDir}/js/[name].[chunkhash].${ timeStamp }.js`)  
        .set('chunkFilename', `${assetsDir}/js/[name].[chunkhash].${ timeStamp }.js`)  
        .end()
    )
  },
  css: {
    extract: isProduction ? {
      filename:`${assetsDir}/css/[name].${ timeStamp }.css`,
		 	chunkFilename:`${assetsDir}/css/[name].[chunkhash].${ timeStamp }.css`,
    } : false,

    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/public.scss";`
      }
    }
  },


}
