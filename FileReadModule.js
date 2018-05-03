var fs = require('fs')
var path = require("path")
var data = []
module.exports = function (dirName, fileExt, callback) {
    if (!dirName) {
        return callback("Path required")
    }
    if (!fileExt) {
        return callback("File extension required")
    }
    fs.readdir(dirName, 'utf8', function (err, files) {
        if (err) {
            return callback(err)
        }
        files = files.filter(function (file) {
            return path.extname(file) === '.'+fileExt
        })
        callback(null, files)
    })
}
