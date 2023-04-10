/*
Create a constructor function called Smartphone that takes in 3 parameters: 
brand,name, price. To create an object from a constructor function, we use the new keyword. 
Create two different objects.
*/

function Smartphone(brand, name, price){
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let tarik = new Smartphone('Apple', 'iPhone 7', 1000);
let ipek = new Smartphone('Samsung', 'Galaxy S8', 700);
let emre = new Smartphone('Apple', 'iPhone 13', 20000);
let alara = new Smartphone('Apple', 'iPhone 12', 12000);
let senay = new Smartphone('Apple', 'iPhone 7', 900);
let metin = new Smartphone('Samsung', 'unknown', 30);

console.log(tarik);
console.log(ipek);
console.log(emre);
console.log(alara);
console.log(senay);
console.log(metin);