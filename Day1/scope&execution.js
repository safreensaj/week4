// 1. JavaScript Scope & Execution Context
//What is Execution Context? (Global & Functional)
//Execution context is the environment where JavaScript code runs. It decides what variables and functions are available.
//There are two main types:
///Global Execution Context
//Created when the file runs first. It handles global variables and functions.
//Function Execution Context
//Created every time a function is called. Each function gets its own separate context.


//How JavaScript Executes Code in Two Phases
//JavaScript runs code in two phases: Memory Phase and Execution Phase.

//Memory Phase (Creation Phase)
//Variables are stored with undefined
//let and const are created but uninitialised(TDZ)
//Functions are stored completely in memory

//Execution Phase
//Code runs line by line
//Variables get actual values
//Functions are executed

/*
"In memory phase, variables declared with var are initialized as undefined. 
But let and const are also stored in memory,
however they are in Temporal Dead Zone and cannot be accessed before declaration."   */


/*
Lexical Environment

An Execution Context in JavaScript has 3 main parts:

This is like a box that stores variables and functions.

It has 2 things inside:

a) Environment Record
Stores let, const, and function declarations.
Example:
let a = 10;
function test() {}
These are saved here.

b) Outer Environment Reference
This is a link to the parent scope.
If a variable is not found inside, JavaScript looks outside (parent).
If not found here → check outside.
This is how scope chain works.

Variable Environment
This stores var variables.
Example:
var x = 20;
x is stored in Variable Environment.

Simple difference:
let & const → Lexical Environment
var → Variable Environment
(Both are very similar internally.)

this Binding
This stores the value of this.
Example:
In global:
console.log(this);

this = window (in browser)

Inside normal function:
function show() {
  console.log(this);
}
Depends on how function is called.
So this part decides:
What does this point to?    */

/*
Execution context has three parts: lexical environment, variable environment, and this binding.
Lexical environment stores let, const and functions and keeps reference to outer scope.
Variable environment stores var variables.
This binding decides what this refers to.     */


/*
what is scopechain?
When a function runs, JavaScript creates an execution context.
It stores variables in lexical and variable environment.
If a variable is not found, it checks the outer environment.
This is called scope chain.    */

