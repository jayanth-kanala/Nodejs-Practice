var http = require("http")
http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" })
    res.write("hello\n")
    setTimeout(function () {
        res.end("world\n")
    }, 2000);
}).listen("8000")
