/*
Rewrite the exercise 20, by using a Switch statement.

Create a variable called primitive and assign it a value. 
Check if the value is number, string or boolean type and print it in the console.
*/

let primitive = true;
switch (primitive) {
    case Number(primitive):
        console.log('The variable is a number')
        break;
    case String(primitive):
        console.log('The variable is a string')
        break;
    case Boolean(primitive):
        console.log('The variable is a boolean')
        break;
    default:
        console.log('The variable is something wierd')
        break;
};