let BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'babel-polyfill',
        './app/js/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new BellOnBundlerErrorPlugin()
    ]
};