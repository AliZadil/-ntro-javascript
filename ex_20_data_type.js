/*
Create a variable called primitive and assign it a value. 
Check if the value is number, string or boolean type and print it in the console.
*/

let primitive = 5;

if (primitive === Number(primitive)) {
    console.log('The variable is a number.')
} else if (primitive === String(primitive)){
    console.log('The variable is a string.')
} else {
    console.log('The variable is a boolean.')
};