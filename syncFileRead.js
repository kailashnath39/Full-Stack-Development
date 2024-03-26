var fs = require("fs");

var datatxt = fs.readFileSync('sync.txt');
console.log(datatxt.toString());

console.log("Execution ends");

