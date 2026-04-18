//Call Stack Behaviour
//Call stack is where JavaScript keeps track of function calls. It works in LIFO order (Last In, First Out).
//“Call stack is a LIFO structure that manages execution contexts.”

function one(){
  two();
}

function two(){
  console.log("Hello");
}

one();

//When a function is called → pushed into stack
//When it finishes → removed from stack

//Example:
/*  If A calls B, and B calls C
Stack order:
C → B → A

C finishes first.    */

/*
javascript uses a callstack to manage execution contexts. 
Execution contexts are managed by the callstack. It works LIFO
*/