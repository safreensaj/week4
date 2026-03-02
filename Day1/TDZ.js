//Temporal Dead Zone (TDZ)
//Temporal Dead Zone is the time between variable declaration and initialization where you cannot access let and const variables.

//Example:
console.log(a); //  Error
let a = 10;

//TDZ exists only for let and const.