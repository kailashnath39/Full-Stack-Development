const caluclator = require("./Arith");
const prompt = require("prompt-sync")();

var a = parseInt(prompt("Enter a : "));
var b = parseInt(prompt("Enter b : "));

console.log("Addition of " + a + " and " + b + " is " + caluclator.add(a,b));
console.log("Subtraction of " + a + " and " + b + " is " + caluclator.sub(a,b));
console.log("Multiplication of " + a + " and " + b + " is " + caluclator.mul(a,b));
console.log("Division of " + a + " and " + b + " is " + caluclator.div(a,b));
console.log("Modulus of " + a + " and " + b + " is " + caluclator.mod(a,b));
