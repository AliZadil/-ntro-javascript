/*
Given the following objects array:

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
{ id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
{ id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
{ id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
];

Create a function that iterates over the array and gives the following output:

Luca
Life Is a Game, Play to Win!
Mario
Never give up!
Giovanna
Life Is a Game, Play to Win!
Carmelo
A picture is worth a thousand words!
The youngest is è Carmelo
The longest surname is Brambilla

Then add a new student at the third place of the array:

{ id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'}

Run the function one more time. You should get the following output:

Luca
Life Is a Game, Play to Win!
Mario
Never give up!
Elena
A picture is worth a thousand words!
Giovanna
Life Is a Game, Play to Win!
Carmelo
A picture is worth a thousand words!
The youngest is Carmelo
The longest surname is Pappalardo

Each phrase is related to the students hobbies.
You can create different functions for each task and invoke them inside the main function.
The console.log can print a combo: strings and variables ( example: console.log('Hello', name) ).
*/

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
    { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
];

let finalSentences = [students[0],students[0]];
let phrases = {
    'gamer': 'Life Is a Game, Play to Win!',
    'sportsman' : 'Never give up!',
    'photographer' : 'A picture is worth a thousand words!',
};

students.forEach(element => {
    console.log(element['name']);
    console.log(phrases[element['hobby']]);
    (finalSentences[0]['age']>element['age'])? finalSentences[0] = element: finalSentences;
    (finalSentences[1]['surname'].length<(element['surname']).length)? finalSentences[1] = element: finalSentences;
});

console.log('The youngest is ' + finalSentences[0]['name']);
console.log('The longest surname is ' + finalSentences[1]['surname']);