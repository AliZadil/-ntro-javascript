/*
let user = {
name: "Cosimo",
age: 30,
};


let newUser = {};

for (const key in user) {
    newUser[key]=user[key]
};

newUser.name='Paola';

console.log(newUser);
console.log(user);
*/

let user = {
    name: "Cosimo",
    age: 30,
    };
    
    let newUser = Object.assign({}, user);

    newUser.name='Paola';
    
    console.log(newUser);
    console.log(user);