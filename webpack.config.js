const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

const HtmlPlugin = require('html-webpack-plugin');

module.exports={
    entry : './src/main.js',
    output: {
        path :path.resolve(__dirname,'dist'),
        clean: true
    },
    // 웹펙 라우터 이동안될때 devServer true 설정해줘야함 (리액트도 이와 동일)
    devServer: {
        historyApiFallback: true,
    },


    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.vue' ],
        alias: {
            '~' : path.resolve(__dirname,'src'),
            'vue': '@vue/runtime-dom'
        }
    },

    module: {
        rules : [
            {
                // vue로 시작하는 파일들을 찾아옴
                test : /\.vue$/,
                use : 'vue-loader'
            },
            {
                test: /\.css$/,
                use : [
                    'vue-style-loader',
                    'css-loader'
                ]

            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: './src/index.html'
        })
    ]

}