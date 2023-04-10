/*
Given the following array:

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
Remove the last element of the array and add the following one at the end of the array: { id: 3, name: "Francesco", surname: "Verdi", age: 41 }
*/

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

students.pop();
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });

console.log(students);