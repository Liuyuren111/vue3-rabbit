const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static', //打包存放目录地方
  css: { // 配置scss全局变量
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  chainWebpack: (config) =>{
    // 修复HMR（热更新）
    config.resolve.symlinks(true);
  }
})
