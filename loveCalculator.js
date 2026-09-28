// Random Number Generations

// function that generates a number between 0 - 0.999...
// var n = Math.random();

// Prompts to get data from Client
prompt("What is your name?:");
prompt("What is your crush / love's name?:");

// Conduct pseudorandomization
var n = Math.random();

// Rationalize the randomization
var randomWhole = Math.floor(n*100) +1;

// Print the output to as an alert
alert ("Your love score is " + randomWhole + "%.");