const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
                header: 'header@http://localhost:3001/remoteEntry.js', // Charger le Header distant
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
