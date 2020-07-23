/**
 * @author Wuner
 * @date 2020/7/23 19:59
 * @description
 */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
    "eval",
    "eval-cheap-source-map",
    "eval-cheap-module-source-map",
    "eval-source-map",
    "cheap-source-map",
    "cheap-module-source-map",
    "inline-cheap-source-map",
    "inline-cheap-module-source-map",
    "source-map",
    "inline-source-map",
    "hidden-source-map",
    "nosources-source-map"
].map(devtool => ({
    mode: "none",
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: `./js/[name]-${devtool}.js`
    },
    devtool,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `${devtool}.html`
        })
    ]
}));
