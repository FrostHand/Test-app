const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/Test comments.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: __dirname + '/dist'
    },

    plugins: [
        new HTMLPlugin ({
            filenmae: 'Web app.html',
            template: './src/Test app.html'
        })
    ]
}