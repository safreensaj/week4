const { createElement } = require("react");

let arr = ["apple", "orange", "grape"];
let results=document.getElementById("results");
arr.forEach(arr => {
    let div=document.createElement("div")
    div.innerText=arr;
    console.log(arr)
    results.appendChild(div)
});