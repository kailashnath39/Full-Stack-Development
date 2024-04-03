var express = require("express");
var app = express();
app.get('/', function(req, res){
    res.send("<h1 style = color:blue;>Hello Cap</h1>");
});


var server = app.listen(9090, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server Listening at http://", host, port);
});
