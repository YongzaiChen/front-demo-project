// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中所有的配置信息
module.exports = {
    // 指定入口文件
    entry: "./index.ts",

    // 指定打包文件所在的目录
    output: {
        // 指定打包后的目录
        path: path.resolve(__dirname,'dist'),
        // 打包后的文件
        filename: "bundle.js"
    },

    "mode": 'development',

    // 指定打包使用的模块
    module: {
        rules: [
            {
                // test指定规则生效的文件,(/\.ts$/所有.ts结尾的文件)
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置webpack插件,打包时候会自动生成html文件，并且引入相关资源
    plugins: [
        new HTMLWebpackPlugin({
            // 自己新建一个index.html打包的时候，会根据这个html，生成模版，可以设置标题
            template: "./index.html",
        }),
        new CleanWebpackPlugin()
    ],

    // 设置引用模块
    resolve: {
        extensions:['.ts','.js']
    }
}