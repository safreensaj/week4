//What is document object?
//"Document object represents the HTML page in JavaScript."

//What is DOM?
//"DOM is the tree structure of HTML elements."

//What is querySelector?
//It selects elements using CSS selectors."

//getElementById?
//"It selects element using id.

console.log(document.getElementById("title").innerText);
console.log(document.querySelector(".text").innerText);
//Output:
//First line → Hello
//Second line → Hi
// Why?
//Because:
//<h1>Hello</h1> → already contains "Hello"
//<p>Hi</p> → already contains "Hi"
//innerText has 2 uses:
//1. Read (get value)
//element.innerText
//existing text edukkum
//2. Write (change value)
//element.innerText = "New Text"
//text change cheyyum
