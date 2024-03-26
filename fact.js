const prompt = require("prompt-sync")();

n = parseFloat(prompt("Enter n : "));
function fact(n)
{
    if(n - Math.floor(n) == 0 && n >= 0)
    {
        if(n > 0)
            return n * fact(n-1);
        else
            return 1;
    }
    else
        console.log("factorial is not defined");
    return -1;
}

console.log("factorial is : " + fact(n));