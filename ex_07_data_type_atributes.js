/*
Convert the hello variable to a numeric data type and print it in the console.
Convert the age variable to a boolean data type and print it in the console.
Convert the isGraduated variable to a string data type and print it in the console.
Try to explain the output of the hello variable casting.

let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string
*/

let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

hello = Number(hello);
age = Boolean(age);
isGraduated = String(isGraduated);

console.log(hello);
console.log(age);
console.log(isGraduated);