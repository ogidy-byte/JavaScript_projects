// Prompt to get the personName
var personName = prompt("What is your first personName?");

//Seperating the first char
var firstWord = personName.slice(0, 1);

//Getting the rest of the char
var remainingWord = personName.slice(1, personName.length);

// Putting them together to get the captalized personName
var capitalizedName = firstWord.toUpperCase() + remainingWord.toLowerCase();

//Creating the alert to print personName
alert("Hello " + capitalizedName);