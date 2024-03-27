var url = require("url");

var urlStr = 'smtp://user:pass@host.com:80/resource/path/?query=string#hash';


var urlObj = url.parse(urlStr, true, false);
urlString = url.format(urlObj);
console.log("URL ADDRESS : ", urlString);
console.log("URL COMPONENTS : ");
console.log("Protocol : ", urlObj.protocol);
console.log("Host : ", urlObj.host);
console.log("Auth : ", urlObj.auth);
console.log("Port : ", urlObj.port);
console.log("Path : ", urlObj.path);
console.log("Hostname : ", urlObj.hostname);
console.log("Hash : ", urlObj.hash);
console.log("Query : ", urlObj.query);

var originalUrl = 'http://user:pass@host.com:80/resource/path/?query=string#hash';

var newResource = '/another/path?querynew';
console.log(url.resolve(originalUrl, newResource));
console.log(urlObj.href);
console.log(urlObj.protocol);

