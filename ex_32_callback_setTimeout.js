/*
Starting from the exercise 31, we want to print the "Hello" "Name" strings after one second. 
In order to achieve this, we can use the setTimeout() JavaScript function. 
This function takes in two parameters: the first one is a function, the second one is the delay time.

Create two functions: the first one is called sayHelloName and takes is as parameter another function (the second one) called printName. 
-The printName function should just execute the console.log() method and print the name. 
The sayHelloName that takes in the callback as parameter, must execute the console.log() of 
the "Hello" string and after that invoke the function taken in as parameter.
*/


function sayHelloName(callback) {
    setTimeout (function () {
        console.log('Hello');
    }, 1000); 
    callback();
}
function printName() {
    console.log('Ali');
}

sayHelloName(printName);