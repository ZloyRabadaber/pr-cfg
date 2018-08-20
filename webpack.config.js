const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "index.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'es2015', 'stage-0']
                }
            }
        ]
    }
}
