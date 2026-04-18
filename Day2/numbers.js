//Numbers
//In JavaScript, numbers are used to store numeric values.
//JavaScript has only one number type (no separate int or float).

//Example:

let a = 10;
let b = 3.5;

function roundNumber(num){
 return Math.round(num);
}

console.log(roundNumber(4.6));

//toFixed()
//decimal control
let num = 10.567;
console.log(num.toFixed(2)); // "10.57"

//convert string → number
Number("10"); // 10

//parseInt() vs parseFloat()
parseInt("10.9");   // 10
parseFloat("10.9"); // 10.9
//parseInt → integer
//parseFloat → decimal

//“Not a Number check”
isNaN("abc"); // true
