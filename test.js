var http = require("http")
var str=""
callback = function(response) {

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
    // your code here if you want to use the results !
  });
}

var req = http.request("http://google.com", callback).end();
req = http.request("http://apple.com", callback).end();