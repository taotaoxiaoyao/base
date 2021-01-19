const webpack = require('webpack')
const path = require('path')
const defaultSettings = require('./src/config/settings')
function getEnv() {
  return (() => {
    if (process.env.CODE_ENV === 'dev') {
      return 'dev'
    }
    return ''
  })()
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'Vue Project Template'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    host: '127.0.0.1',
    port: 8864,
    open: true, // 自动拉起浏览器
    hot: true, // 热加载// 配置多个代理
    overlay: {
      warning: true,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'http://121.36.10.17:18084/',
        changeOrigin: true,
        // 是否启用websockets
        ws: true,
        pathRewrite: {
          '^/api': 'http://127.0.0.1:8081'
        }
      }
    }
  },
  configureWebpack: {
    // index.html的title
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process': JSON.stringify(getEnv())
      })
    ]
  },
  chainWebpack(config) {
    // 提升首屏速度
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
