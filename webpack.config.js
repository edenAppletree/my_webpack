// webpack的默认配置文件 --- webpack.config.js(默认)
const path = require('path')
//  引入插件-自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//  引入插件-自动清除dist目录内容
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode:'development',//开发阶段模式，简易打包，打包速度快
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),// 出口路径 绝对路径
        filename:'bundle.js'// 出口文件名
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',// 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename:'index.html'// 生成文件的名称
        }),
        new CleanWebpackPlugin()
    ]
    
}