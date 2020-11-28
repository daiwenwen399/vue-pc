const path = require('path')

module.exports = {
    // 当前配置会和vue的webpack合并
    configureWebpack: {
        resolve: {
            // 配置路径别名（可以简写路径）
            alias: {
                "@views": path.resolve(__dirname, "src/views"),
                "@comps": path.resolve(__dirname, "src/components"),
                "@utils": path.resolve(__dirname, "src/utils"),
                "@assets": path.resolve(__dirname, "src/assets"),
                "@store": path.resolve(__dirname, "src/store"),
                "@api": path.resolve(__dirname, "src/api"),
            },
        },
    },
    // 代理服务器解决跨域
    devServer: {
        proxy: {
            "/api": {
                target: "http://182.92.128.115",
                changeOrigin: true, // 允许跨域
            },
        },
    },
};