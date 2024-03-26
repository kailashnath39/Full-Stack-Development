var censor = require("./censorifykkn");

console.log(censor.getCensoredWords());
censor.addCensoredWord("playboy");
console.log(censor.getCensoredWords());


console.log(censor.censor("Krishna is a playboy and he is also a lazy and a mad person."));