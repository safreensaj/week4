//WeakSet and WeakMap
//WeakSet
//Similar to Set
//But it only stores objects
//It allows garbage collection

//Example:

let ws = new WeakSet();

let obj = {};
ws.add(obj);

//WeakMap
//Similar to Map
//But keys must be objects

//Example:

let wm = new WeakMap();

let obj1 = {};
wm.set(obj1, "data");

//. What is WeakSet?
//“WeakSet is a collection of objects where values are weakly referenced.”
let ws1 = new WeakSet();

let obj2 = {name: "A"};
let obj3 = {name: "B"};

ws.add(obj2);
ws.add(obj3);

console.log(ws.has(obj2)); // true

obj2 = null; 

// removed automatically (garbage collected)
//Number/string store ചെയ്യാൻ പറ്റില്ല

ws.add(10); // ❌ Error

ws.forEach() // ❌ not allowed
//“Stores objects only, auto delete when object gone”