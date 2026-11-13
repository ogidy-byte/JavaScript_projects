//Create and array output
var output = [];

//Create a function for the fibonacci Generator
function fibonacciGen(n) {

//What to do if n = 1
    if (n === 1){
    output =[0];

// What to do if n = 2
} else if (n === 2){
    output = [0,1];

// Then the crucial part
} else {

// Since all the sequence starts with [0,1] add them first
    output = [0, 1];

// Then create a for loop to cycle the numbers over and over till output.length = n;
    for (var i = 2; i < n; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
    }

// Since it is a function always remeber to return the results which here it is output
return output;
        
}
}

var work = fibonacciGen(8);
console.log(work);