/*
Given the following array:
const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
Print all the elements of the array.
*/

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
    ];

for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
}