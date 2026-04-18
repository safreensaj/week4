//Relationship Between window, Global Object, and the DOM
//"Window is the global object in the browser.
//All global variables and functions are part of window.
//Document is inside window and represents the DOM.
//Using document, we can access and modify HTML."

var a = 10;

console.log(window.a); // 10

//Because:var global variables become part of window

let b = 20;
console.log(window.b); // undefined
//Because:let and const are NOT added to window

// What is DOM?
//DOM = Document Object Model
//HTML page → converted into JavaScript object
// So JS can:
//read HTML
//change HTML
//update content
//Example:
<h1 id="title">Hello</h1>
document.getElementById("title").innerText = "Hi";
//Output changes → Hi

//What is inside window?
//Many things:
//document (DOM)
//console
//alert()
//setTimeout()
//variables (var)