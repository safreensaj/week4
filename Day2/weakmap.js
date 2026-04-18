//What is WeakMap?
//“WeakMap is a collection of key-value pairs where keys must be objects.”

let wm = new WeakMap();

let obj = {};

wm.set(obj, "data");

console.log(wm.get(obj)); // "data"

//Why use WeakMap?
//To avoid memory leaks

let wm1 = new WeakMap();

let obj1 = {};

wm1.set(obj1, "hello");

 //obj1 = null;

console.log(wm1.get(obj1));
//WeakMap may remove that entry automatically
//(Garbage collection happens)

/*“WeakMap and WeakSet store objects with weak references.
They help in garbage collection and avoid memory leaks.”*/

//Stores object → value, auto delete when object gone”