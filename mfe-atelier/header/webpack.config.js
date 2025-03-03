const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3001,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'header',
            filename: 'remoteEntry.js',
            exposes: {
                './Header': './src/index.js',  // Expose le module Header
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    output: {
        publicPath: 'auto',
    }
};
