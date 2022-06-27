// webpack的默认配置文件 --- webpack.config.js(默认)
const path = require('path')
//  引入插件-自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//  引入插件-自动清除dist目录内容
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//  引入vue插件
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    mode: 'development',//开发阶段模式，简易打包，打包速度快
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),// 出口路径 绝对路径
        filename: 'bundle.js'// 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',// 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename: 'index.html'// 生成文件的名称
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 3000,//端口号，下面设置运行时自动打开
        open: true
    },
    module: {
        rules: [{
            test: /\.css$/, // 匹配所有的css文件
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/, // 匹配执行类型的文件
            use: ["style-loader", "css-loader", 'less-loader']
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/i,
            type: 'asset',
            parser: {//解析器
                dataUrlCondition: {
                    maxSize: 8 * 1024,
                },
            },
            generator: {
                filename: '[hash:6][ext]',//资源文件处理之后，输出的文件名
            },
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,//字体图标
            type: 'asset/resource',
            generator: {
                filename: 'font-[name].[hash:6][ext]'
            },
            parser: {//解析器 规则
                    dataUrlCondition: {//dataUrl的情况
                      maxSize: 1 * 1024,//maxSize限制最大值
                    },
                  },
        },
        {
            test: /\.js$/,//加载器 - 处理高版本js语法
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                }
            }  
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader' 
        }
        ]
    }

}