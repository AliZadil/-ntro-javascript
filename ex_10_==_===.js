/*
Explain the difference between the double and the triple equals operator.
*/

const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(yearsCompleted == firstYearCompleted); // true because 1 is true in numeric and true is 1 in boolean
console.log(yearsCompleted === firstYearCompleted); // false beacuse their types are different
