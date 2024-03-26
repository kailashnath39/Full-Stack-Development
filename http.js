var http = require("http");
var dt = require('./myModule/my');

http.createServer(function (req,res)
{
    res.writeHead(200, {'content-type':'text/html'});
    res.write("<h1>Hello Kailash Welcome to HTTP web Server<h1>");
    res.write("<p style='font-size:25px;font-weight:bold;color:blue'>Current Date and Time Node.js Web server:<br><b style='color:red;'>"+dt.myDateTime()+"</b>");
    res.write("<br><b style='color:green;'>URL pattren:"+req.url+"</b></p>");
    res.end("End");
}).listen(9090);