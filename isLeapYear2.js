// Answer from Madam following logic

function isLeapYear(year) {
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0) {
                alert ("It is a Leap year");
            } else {
                alert("It is not a Leap year");
            }
        } else {
            alert("It is a Leap year");
        }
    } else {
        alert ("It is a not Leap year");
    }
    
}