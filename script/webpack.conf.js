const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    entry: './index.js',
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'min'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            options: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}

module.exports = config