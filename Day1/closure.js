//Closures
//Closure is when a function remembers variables from its outer function even after the outer function has finished executing.

//Example:

function outer() {
   let count = 0;
   return function inner() {
      count++;
      console.log(count);
   }
}

const counter = outer();
counter(); // 1
counter(); // 2

//Even after outer() finished, inner() still remembers count.

//Closures are used in:
//Data hiding
//Private variables
//React hooks
//Event handlers