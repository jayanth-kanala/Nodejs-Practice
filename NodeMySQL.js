var http = require('http')
var mysql = require('mysql')

// create mysql connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

http.createServer(function (req, res) {
    req.setEncoding("utf8")
    res.writeHead(200, { 'content-type': "application/json" })
    sql_query = "SELECT first_name FROM profiles"
    con.query(sql_query, function (err, results, fields) {
        if (err) throw err;
        res.end(JSON.stringify(results, null, 4))
    });
 }).listen(Number(process.argv[2]))