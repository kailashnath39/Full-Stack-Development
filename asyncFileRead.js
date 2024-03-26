var fs = require("fs");

var datatxt = fs.readFile('async.txt', function(ferr, dataaynch)
{
    if(ferr)
        return console.error(ferr);
    console.log(dataaynch.toString());
});

console.log("Execution ends");