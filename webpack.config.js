'use strict';

module.exports = {
    mode: 'development',
    entry: {
        main: __dirname + '/sources/js/index.js',
    },
    output: {
        path: __dirname + '/js',
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: [
            __dirname + '/sources/js/modules',
            __dirname + '/node_modules',
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    },
                },
            }
        ]
    },
};
