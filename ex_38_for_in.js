/*
Starting from the exercise 37, print the key of the car object
Use the for in statement

Create an object literal called car with two properties: name and color. 
Print in the console the properties values.
*/

let car = {
    'name':'50F',
    'color':'Red'
}

for (const key in car) {
    console.log(key);
    console.log(car[String(key)]);
}