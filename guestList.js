// Create array of guestlist
var guestList = ["Angela", "Jack","Pam", "James", "Lara", "Jason"];

// Create a prompt to accept the Guest's name
var nameOfGuest = prompt("Please enter your name below:");

// Fix the casing of the name to correspond to the casing of the array
var fixedName = (nameOfGuest.slice(0,1)).toUpperCase() + (nameOfGuest.slice(1,nameOfGuest.length).toLowerCase());

// Confirm name with what is in the array
var confirmGuest = guestList.includes(fixedName);

// Write a condition to alert the guest if he is welcome or not
if (confirmGuest === true) {
    alert ("You are welcome, "+fixedName);
} else {
    alert ("Sorry, your name is not on the Guestlist");
}

