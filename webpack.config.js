module.exports = {
    entry: "./test.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jsx-loader?harmony'
            },
            // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    }
};