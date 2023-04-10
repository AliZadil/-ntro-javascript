/*
Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

Remove the element Giovanni.
Add a new element called Pippo at the end of the array.
Add the element Giovanni to the beginning of the array.
*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

names.pop();
names.push('Pippo');
names.unshift('Giovanni');

console.log(names);