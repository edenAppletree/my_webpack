// webpack的默认配置文件 --- webpack.config.js(默认)
const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),// 出口路径 绝对路径
        filename:'bundle.js'// 出口文件名
    }
}