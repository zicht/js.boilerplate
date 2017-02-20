const path = require('path');

const config = {
    entry: {
        'dist/pad': './src/pad.ts',
        'dist/repeat': './src/repeat.ts',
        'dist/reverse': './src/reverse.ts'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname)
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configFile: './node_modules/zicht-tslint/tslint.json',

                    tsConfigFile: './tsconfig.json'
                }
            },

            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            },

            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    devtool: 'source-map'
};

module.exports = config;
