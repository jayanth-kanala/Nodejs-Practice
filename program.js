// Lesson 13
// var http = require('http')
// var url = require('url')
// var data = '', out = {}
// http.createServer(function (req, res) {
// 	out = {}
// 	req.setEncoding("utf8")
// 	res.writeHead(200, { 'content-type': 'application/json' })
// 	urlParse = url.parse(req.url, true)
// 	if ("GET" == req.method) {
// 		if ("/api/parsetime" == urlParse.pathname) {
// 			if (undefined != urlParse.query.iso) {
// 				date = new Date(urlParse.query.iso);
// 				out.hour = date.getHours()
// 				out.minute = date.getMinutes()
// 				out.second = date.getSeconds()
// 			}
// 		} else if ("/api/unixtime" == urlParse.pathname) {
// 			date = new Date(urlParse.query.iso);
// 			out.unixtime = date.getTime()
// 		}
// 	}
// 	res.end(JSON.stringify(out))
// }).listen(Number(process.argv[2]))
// Lesson 12
// var http = require('http')
// var data = '', post = {}
// http.createServer(function (req, res) {
// 	req.setEncoding("utf8")
// 	if ("POST" == req.method) {
// 		req.on("data", function (chunk) {
// 			data += chunk
// 		}).on("end", function () {
// 			res.end(data.toString().toUpperCase())
// 		})
// 	} else {
// 		return res.end("Only post data !!")
// 	}
// }).listen(Number(process.argv[2]))
// Lesson 11
// var http = require('http')
// var fs = require('fs')
// var data = ''
// http.createServer(function (req, res) {
// 	res.writeHead(200, { 'content-type': 'text/plain' })
// 	t = fs.createReadStream(process.argv[3], { encoding: "utf8" })
// 	t.on("data", function (chunk) {
// 		data += chunk
// 	}).on("end", function () {
// 		res.end(data)
// 	})
// }).listen(Number(process.argv[2]))

// Lesson 10
// var net = require('net')
// var formattedDate = [], formattedTime = []
// var dt = new Date()
// formattedDate[0] = dt.getFullYear()
// formattedDate[1] = padZero(dt.getMonth() + 1)
// formattedDate[2] = padZero(dt.getDate())
// formattedTime[0] = padZero(dt.getHours())
// formattedTime[1] = padZero(dt.getMinutes())
// var server = net.createServer(function (socket) {
// 	socket.write(formattedDate.join("-") + " " + formattedTime.join(":"))
// 	socket.end("\n")
// }).listen(process.argv[2])
// function padZero(moment) {
// 	return moment < 10 ? "0" + moment : moment
// }
// Lesson 9
// var http = require('http')
// var countRequest = process.argv.length - 2, urls = process.argv.splice(2), data = []
// urls.forEach(function (v, k) {
// 	http.get(v, function (res) {
// 		data[k]=''
// 		res.setEncoding("utf8")
// 		res.on("data", function (stream) {
// 			data[k] += stream
// 		}).on("end", function () {
// 			countRequest--
// 			if (0 == countRequest) {
// 				data.forEach(function(element) {
// 					console.log(element)
// 				});
// 			}
// 		})
// 	})
// })
// Lesson 8
// var http = require('http')
// var str = ""
// http.get(process.argv[2], function (res) {
// 	res.setEncoding("utf8")
// 	res.on("data", function (data) {
// 		str += data
// 	}).on("end", function () {
// 		console.log(str.length)
// 		console.log(str)
// 	})
// })
// Lesson 7
// var http = require('http')
// http.get(process.argv[2], function (res) {
// 	res.setEncoding("utf8")
// 	res.on("data", function (data) {
		// console.log(data)
// 	})
// })
// Lesson 6
// var mymodule = require('./file_read_module.js')
// mymodule(process.argv[2], process.argv[3], function (err, data) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		data.forEach(function (file) {
// 			console.log(file)
// 		});
// 	}
// })
// Lesson 5
// var fs = require('fs')
// var searchPath = process.argv[2]
// var searchFilter = process.argv[3]
// fs.readdir(searchPath, 'utf8', function (err, files) {
// 	if (!err) {
// 		for (var i = 0; i < files.length; i++) {
// 			if (files[i].search(searchFilter) > 0) {
// 				console.log(files[i])
// 			}
// 		}
// 	}
// })
// Lesson 4 async file read
// var fs = require('fs')
// var fileContent = fs.readFile(process.argv[2], 'utf8', function (error, data) {
// 	if (!error) {
// 		var lines = data.split("\n").length - 1;
// 		console.log(lines)
// 	}
// })
// Lesson 3
/*
var fs = require('fs')
var fileContent = fs.readFileSync(process.argv[2])
var str = fileContent.toString()
console.log(str.split("\n").length - 1)
*/

// Lesson 2
/*
 * var sum =0
for (i=2; i < process.argv.length; i++) {
	sum += Number(process.argv[i])
}
console.log(sum)
*/
// Lesson 1
// console.log('HELLO WORLD')