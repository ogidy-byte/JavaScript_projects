// The BMI Calculator

function bmiCalculator(weight, height) {

    // formula for BMI
    var bmi = weight / (height*height);

    // Keep the answer to 3dp
    var bmiToThree = bmi.toFixed(3);

    // return the bmi in 3dp
    return bmiToThree;
}

// Prompt to ask client for weight in kg and height in m

var weightOfClient = prompt ("Type in your weight in kg:");
var heightOfClient = prompt("Type in your height in m:");

// Calling function to calculate BMI using the client's input
var bmiAnswer = bmiCalculator(weightOfClient, heightOfClient);

// Printing the output as an alert
alert ("Your BMI is "+ bmiAnswer + " kg/m2");