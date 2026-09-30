// Create the array
var output = [];

// Add a variable that will help with the counting forward
var count = 1;

// Create a function for the whole operation
function fizzBuzz() {

// Adding a while loop to it so that I don't have to type it again and again everytime

    while (count <= 100){

//In the function, give the condition to print FizzBuzz when the number is divisible by 3 and 5 befoore anyother condition
// This is because conditions are run from 1st line to last if the first is correct, it will bypas all the other codes.

    if (count % 3 == 0 && count % 5 == 0){
        output.push("FizzBuzz")
    } else if (count % 3 == 0){ // Then an else  if for 3
        output.push("Fizz");
    } else if (count % 5 == 0){ // Then an else if for 5
        output.push("Buzz")
    } else{
        output.push(count);
    }

    count++;
}

// Added console.log so I can see what has happened
    console.log (output);
}

