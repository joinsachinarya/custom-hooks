const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js"
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, "src/index.html")
        })
    ],
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        hot: true,
        open: true
    },
    mode: "development",
}