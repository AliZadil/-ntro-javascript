/*
If you run this function, you'll get an error. Fix the function and explain briefly what's wrong.
function canPlay() {
let sport = " Football";

if (true) {
let personName = "Cosimo";
}

console.log(personName + sport);
}

canPlay();
Suggestion Be careful with the variables scope.
*/

function canPlay() {
    let sport = " Football";
    
    if (true) {
    let personName = "Cosimo";
    console.log(personName + sport); // we need to put console.log(personName + sport) inside the if statement because personName's scope is inside the if statement
    }
}
    
canPlay();