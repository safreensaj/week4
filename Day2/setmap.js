//Set and Map
//Set
//Set is a collection that stores only unique values.
//A Set stores unique values only.
//Duplicate values are not allowed.

//Example:

let numbers = new Set([1,2,3,3,4]);
console.log(numbers);

//Output:{1,2,3,4}

//Remove duplicates from an array.

let arr1 = [1,2,2,3,4];

let unique = [...new Set(arr1)];

console.log(unique);

//Map

//A Map stores key-value pairs.
//Keys can be any data type.

//Example:

let user = new Map();

user.set("name","John");
user.set("age",25);

console.log(user.get("name"));

//"Set is used to store unique values, 
// while Map is used to store key-value pairs where keys can be any data type."

//Difference Between Array / Object and Set / Map
//Array
//Stores ordered list of values
//Allows duplicate values

//Example:

let arr = [1,2,2,3];

//Store user information.


//Object
//Stores key-value pairs
//Keys are strings or symbols

//Example:

let obj = {
 name: "John",
 age: 20
};

//Set
//Stores unique values only

//Map
//Stores key-value pairs
//Keys can be any type

//"Array stores ordered values, Object stores key-value pairs with string keys. 
// Set stores unique values only, and Map stores key-value pairs where keys can be any data type."
function toastBread(callback,errorcallback){
setTimeout(()=>{
    let error=false;
    if(error){
        errorcallback("nothing toast");
    }else{
        console.log("toasting bread");
        callback();
    }
},2000)
}
function addVegetables(callback,errorcallback){
setTimeout(()=>{
    let error=false;
    if(error){
        errorcallback("not vegetables");
    }else{
        console.log("adding vegetables");
        callback();
    }
},1000)
}
function addsauce(callback,errorcallback){
    setTimeout(()=>{
        let error=true;
        if(error){
            errorcallback("not sauce");
        }else{
            console.log("adding sauce");
            callback();
        }
    },1000);
}
function servesandwich(){
    console.log("serving....");
}
function errorhandling(msg){
console.log("Error : ",msg);
}
function makingsandwich(){
    toastBread(()=>{
 addVegetables(()=>{
addsauce(()=>{
servesandwich();
},errorhandling);
 },errorhandling);
    },errorhandling);
}

 makingsandwich();


let students=new Map();
students.set("Rahul",90);
students.set("Rishi",70);
students.set("Rani",95);
console.log(students);
for(let key of students.keys()){
console.log(key);
}
for(let value of students.values()){
console.log(value);
}
console.log(students.has("age"));
students.set("Rahul",98);
console.log(students.get("Rahul"));
students.delete("Rani");
console.log(students);
console.log(students.size);
for(let[key,value] of students){
    console.log(key,value);
}
let arri=Array.from(students);
console.log(arri)

