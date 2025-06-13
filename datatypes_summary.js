// # Primitive data types

// Call By Value : this is call by value datatype. reference not share the copy of valuse is share in call by values
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


let str = "hello"
let No= 122

let booleanNo= true

let emailId = undefined;
let temp = null;
 
const id = Symbol('124')
const anotherId = Symbol('124')

// console.log(id === anotherId);
// console.log(typeof id);

const bigNumber = 7788941421039845621300n;
// console.log(bigNumber);





//  Reference Types : (Non Primitive)
// Array, Objects, Functions

const heros = ["Ashok Saraf", "Akashy", "Ajay", "Prabhas" ]
console.log(heros);

let myObj = {
    Name: "Mukesh",
    age: 24
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}

//Function calling
 myFunction();


 