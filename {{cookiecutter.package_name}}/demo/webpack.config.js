/* global require, module,__dirname*/

const path = require('path');

const config = {
    entry: {
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname)
    },

    resolve: {
        alias: {
        },

        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            },

            {
                test: /\.[tj]sx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },

    devtool: 'source-map'
};

module.exports = config;
