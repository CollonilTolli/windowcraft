const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        app:'./src/js/app.js',
        slider:'./src/js/slider.js',
        burger: './src/js/burger.js'
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            },  
            {
                test: /\.html$/i,
                loader: "html-loader",
            }, 
        ]
    }
}