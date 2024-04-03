var http = require('http');
 var options = {
 hostname: '172.16.20.153',
 port: '8082',
 path: '/hello.html'
 };
 function handleResponse(response) {
 var serverData = '';
 response.on('data', function (chunk) {
 serverData += chunk;
 });
 response.on('end', function () {
 console.log(serverData);
 });
 }
 http.request(options, function(response){
 handleResponse(response);
 }).end();