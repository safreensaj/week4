//Date Object
//Date object is used to work with date and time.

//Example:

let today = new Date();
console.log(today);

//You can get:
//current date
//current time
//year, month, day etc.

//Example:

today.getFullYear()
today.getMonth()
today.getDate()
// "JavaScript Numbers store numeric values. 
// The Math object provides built-in mathematical functions like round, max, random. 
// The Date object is used to work with date and time."

//Month starts from 0  (common mistake!)

//How to generate random number?
Math.floor(Math.random() * 10);

//Why month starts from 0?
//Because JS internally uses array indexing

//What is NaN?
//Invalid number result