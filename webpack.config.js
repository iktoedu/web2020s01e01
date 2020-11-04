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
    }
};
