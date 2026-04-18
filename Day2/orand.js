//What is short-circuiting in JavaScript?

//Short-circuiting means JavaScript stops evaluating once the result is known.


//OR Operator ||

//Returns first truthy value.

//Example:

let name = "" || "Guest";
console.log(name);

//Output:Guest

//Used for default values.

//AND Operator &&
//Returns first falsy value.

//Example:
console.log(false && true);
//Output:
false

console.log("Hello" && 100);
//Output:
100
//Why?
//both true → last value return


//"Short-circuiting means JavaScript stops evaluating when the result is already determined. 
// The OR operator returns the first truthy value, and the AND operator returns the first falsy value."