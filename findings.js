/* Implement a function named factorial that has one parameter: an integer, . 
It must return the value of (i.e., factorial).

function factorial(n) {
    if (n > 1){
        return n * factorial(n-1);
    };
    return 1;
}

console.log(factorial(5));
*/
/* Complete the getLetter(s) function in the editor. 
It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). 
It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a, e, i, o, u}, then return A.
If the first character in string s is in the set {b, c, d, f, g}, then return B.
If the first character in string s is in the set {h, j, k, l, m}, then return C.
If the first character in string s is in the set {n, p, q, r, s, t, v, w, x, y, z}, then return D.
Hint: You can get the letter at some index in using the syntax s[i] or s.charAt(i)

let name = 'asdasa';

function getLetter(s){
    switch (true) {
        case 'aeiou'.includes(s[0]):
            return 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            return 'B';
            break;
        case 'hjklm'.includes(s[0]):
            return 'C';
            break;
        default:
            return 'D';
            break;
    }
};

console.log(getLetter(name));
*/
/* decifer vowels and consanants of a word.
function decifer(word){
    console.log(word+' is:');
    for (let index = 0; index < word.length; index++) {
        if ('aeuoi'.includes(word[index])) {
            console.log('Vowel');
        } else {
            console.log('Consanant');
        }
    }
};

decifer('husnumetinzadil');
*/
/* linking values with string
let x = 2;
let y = 6;
x>y?console.log(`${x} is greater than ${y}`): console.log(`${x} is not greater than ${y}`);
console.log(`${x} plus ${y} equals ${x + y}`);
*/
/* accumulation function
function acc(monthly, interest, howLong){
    let total = 2000000;
    for (let index = 0; index < howLong; index++) {
        total-=monthly;
        total*=interest;
    }
    return total;
}

console.log(acc(19441, 1.007, 180));
*/
/* Check object element Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i=0; i < contacts.length; i++){
    if (contacts[i]['firstName']==name){
      if (contacts[i][prop]){
        return contacts[i][prop];
      } else{
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

lookUpProfile("Akira", "likes");
*/
/* Second Highest

let arr =[1,2,3,4,5,6,7,8,91,13,1235,234,12312,5678,123456,345,3453,9898];

function secondHighest(num){
    let highest = num[0];
    let second = num[0]>num[1]?num[1]:num[0];
    for (const element of num) {
        if (element>highest) {
            second = highest;
            highest = element;
        } else if (element>second){
            second = element;
        }
    }
    return second;
}

console.log(secondHighest(arr));
*/
/* [...]
const array1 = ["Vijendra","Singh"];
const array2 = ["Singh", "Shakya"];
const array3 = [...array1, ...array2];

console.log(array3);
*/
/* constructor function
function Rectangle(a,b){
    this.length=a;
    this.width=b;
    this.parameter=2*(a+b);
    this.area=a*b;
};

let myBox = new Rectangle(4,5);
let yourBox = new Rectangle(3,8);
console.log(myBox);
console.log(yourBox);
*/
/* Scope example
function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();
 */
/* Create a function that finds all the prime numbers up to its' parameter.

function findPrimes(num, start=1){
  let primeNums = [];
  let isItPrime = true;
  for (let i = start; i < num+1; i++) {
      for (let index = 2; index < i; index++) {
          i%index==0? isItPrime = false: isItPrime;
      };
      isItPrime? primeNums.push(i): primeNums;
      isItPrime = true;
  };
  return primeNums;
};

console.log(findPrimes(1000, 400));
/*
/* return vs console.log();
function shout(eco){
  console.log(eco, eco);
  return (eco+eco);
};
console.log(shout('Fire'));
*/
/* Dice
function dice(){
  console.log(Math.round(5*Math.random()+1), Math.round(5*Math.random()+1));
 }

dice();
*/
/* Swaping Numbers
function swapPairs(num){
    let editor = '';
    for (let i=0;i<String(num).length;i+=2){
      editor += String(num)[i+1];
      editor += String(num)[i];
    }
    return Number(editor);
};
console.log(swapPairs(123456))
*/
/* Show Time and Day
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM '){
    if (minute===0 && second===0){
        hour=12;
        prepand=' Noon';
    }else{
        hour=12;
        prepand=' PM';
    } 
  }if (hour===0 && prepand===' AM '){
    if (minute===0 && second===0){
        hour=12;
        prepand=' Midnight';
    }else{
        hour=12;
        prepand=' AM';
    } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
*/