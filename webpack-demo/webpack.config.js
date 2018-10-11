const path = require("path")

module.exports = {
    entry: './good-index.js',
    output: {
        path: path.resolve('./bundle'),
        filename: "main.js",
    },
}