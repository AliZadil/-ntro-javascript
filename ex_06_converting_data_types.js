/*
Convert the hello variable to a boolean data type.
Convert the age variable to a string data type.
Convert the isGraduated variable to a numeric data type
let hello = 'Ciao'; //boolean 
let age = 18; //string
let isGraduated = false; //number
*/

let hello = 'Ciao'; //boolean 
let age = 18; //string
let isGraduated = false; //number

hello = Boolean(hello);
age = String(age);
isGraduated = Number(isGraduated);

console.log(hello);
console.log(age);
console.log(isGraduated);