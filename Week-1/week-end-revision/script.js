//one hour revision plan

//---------------------------introduction to javascript--------------------------------- 


//javaScript is a versatile, dynamically typed programming language that brings life to web pages by making them interactive. It is used for building interactive web applications and supports both client-side and server-side development.

// Dynamically typed: Variable types are determined at runtime.
// Single-threaded: Executes one task at a time (but supports asynchronous operations).
// Compiled and interpreted: Modern JavaScript engines combine compilation and interpretation for better performance.

// Client-Side Scripting: JavaScript runs on the user's browser, so it has a faster response time without needing to communicate with the server .
// Versatile: Can be used for a wide range of tasks, from simple calculations to complex server-side applications.
// Event-Driven: Responds to user actions (clicks, keystrokes) in real-time.
// Asynchronous: It can handle tasks like fetching data from servers without freezing the user interface.
// Rich Ecosystem: There are numerous libraries and frameworks built on JavaScript, such as React , Angular , and Vue.js, which make development faster and more efficient.

//MAde by Brendan Eich in 1995 in only 10 days
//mocha -> liveScript -> JavaScript ->ECMA Script


//---------------------------Variables In Javascript-----------------------------------------

// used to store data
// var --> attached to window object as its property (if has a gloaval scope-> visible outside the function) 
//     --> hoisted but gives undefined if tries to access before assignment
//let --> has a blocked scope 
//    --> hoisted but gives Reference Error if tries to access before assignment gone under TDZ
//const -->  has also blocked scope
//      --> hoisted but gives Reference Error if tries to access before assignment and gone under TDZ


//[///////////////////////////Hoisting Conflicts////////////////////////////]
 
//=> Conflict Case 1

// console.log(x); //Reference Error , rest of code will not execute
// let x = 10;  
// var x = 20; // Cannot Redeclare with same name in same scope   
// function print(){
    // console.log(x); //Undefined as var cannot gone under TDZ
    // var x = 20;     
// }

// print();
// console.log(x);

 
//=> Conflict Case 2

// console.log(x); //Reference Error , rest of code will not execute
// let x = 10;  
// var x = 20; // Cannot Redeclare with same name in same scope   
// function print(){
    // console.log(x); //Reference Error
    // let x = 20;     //Shadows the Outer x which has gloval scope 
// }

// print();
// console.log(x); // outer x 

//=> Conflict Case 3

// console.log(x); //Reference Error , rest of code will not execute
// var x = 10;  
// var x = 20; // Cannot Redeclare with same name in same scope   
// function print(){
    // console.log(x); //Undefined as var cannot gone under TDZ
    // var x = 20; //This Also shadows the outer x     
// }

// print();
// console.log(x);


//---------------------------Scope In Javscript-----------------------------------------------

// Automatically Global
// If you assign a value to a variable that has not been declared, it will become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

// Example
// myFunction();

// // code here can use carName

// function myFunction() {
//   carName = "Volvo";
// }

//CarName becomes the GLOBAL variable 

//---------------------------NAming Conventions whth Variable Names--------------------------------
// can has underScore and dolllor sign
// NO special Character allowed
// No keyword allowed
// Ccannot start with a Number
// but can has number after first leading Character
// are case sensitive
// In strict mode eval and arguments cannot be the variable Names

//---------------------------Data Types & Type Coercian in JavaScript --------------------------------
// Numbers , Null , Undefined , array , string , boolean , BigInt , Object 

//[Numbers DataTYpe]

// All Numbers are stored as hexdecimal , 64Bit Floating Point
let big = 2e53;
// console.log(`You can Store ${console.log(Number.MAX_SAFE_INTEGER)} Numbers safely In JAvaScript`);

let smallNum = 5e-7; //Eacatly same as 5 * 10^-7

let bigNum = 98765431234567875n; //BigInt
let numBig = BigInt("12344566677776554");

//Intersting
console.log(9999999999999999 === 10000000000000000); // true
//16 digts and if each contains 9 than it can be rounded but not all 16 digit nums can be rounded but these are out of safe limit


//Type Coercian in JavaScrpt

let num1 = 12; //primitive
let num2 = new Number(12); //Object
// console.log(num1==num2); //true
// console.log(num1===num2); //false due to type check

// ===============================
// BASIC typeof
// ===============================
let i = 0;
console.log(`${++i} Type Of "" is ${typeof ""}`);
console.log(`${++i}Type Of "hello" is ${typeof "hello"}`);

console.log(`${++i}Type Of 5 is ${typeof 5}`);
console.log(`${++i}Type Of 5.5 is ${typeof 5.5}`);
console.log(`${++i}Type Of NaN is ${typeof NaN}`);
console.log(`${++i}Type Of Infinity is ${typeof Infinity}`);

console.log(`${++i}Type Of true is ${typeof true}`);
console.log(`${++i}Type Of false is ${typeof false}`);

console.log(`${++i}Type Of undefined is ${typeof undefined}`);
console.log(`${++i}Type Of null is ${typeof null}`);

console.log(`${++i}Type Of {} is ${typeof {}}`);
console.log(`${++i}Type Of [] is ${typeof []}`);

console.log(`${++i}Type Of function(){} is ${typeof function(){}}`);

console.log(`${++i}Type Of 123n is ${typeof 123n}`);
console.log(`${++i}Type Of Symbol() is ${typeof Symbol()}`);

// ===============================
// ACTUAL RESULT TYPE
// ===============================

console.log(`${++i} typeof (null + "") is ${typeof (null + "")}`);
console.log(`${++i} typeof (null + []) is ${typeof (null + [])}`);
console.log(`${++i} typeof (null + {}) is ${typeof (null + {})}`);

console.log(`${++i} typeof (null + undefined) is ${typeof (null + undefined)}`);

console.log(`${++i} typeof ("" + "") is ${typeof ("" + "")}`);
console.log(`${++i} typeof ([] + []) is ${typeof ([] + [])}`);
console.log(`${++i} typeof ({} + {}) is ${typeof ({} + {})}`);
console.log(`${++i} typeof ([] + {}) is ${typeof ([] + {})}`);

console.log(`${++i} typeof (NaN + 5) is ${typeof (NaN + 5)}`);
console.log(`${++i} typeof (NaN + "5") is ${typeof (NaN + "5")}`);


// ===============================
// SUBTRACTION
// ===============================

console.log(`${++i} typeof ("5" - "2") is ${typeof ("5" - "2")}`);
console.log(`${++i} typeof ("5" - 2) is ${typeof ("5" - 2)}`);
console.log(`${++i} typeof (null - 5) is ${typeof (null - 5)}`);
console.log(`${++i} typeof (undefined - 5) is ${typeof (undefined - 5)}`);
console.log(`${++i} typeof (true - 1) is ${typeof (true - 1)}`);


// ===============================
// MULTIPLICATION
// ===============================

console.log(`${++i} typeof ("5" * "2") is ${typeof ("5" * "2")}`);
console.log(`${++i} typeof (null * 5) is ${typeof (null * 5)}`);
console.log(`${++i} typeof (true * 5) is ${typeof (true * 5)}`);


// ===============================
// COMPARISON
// ===============================

console.log(`${++i} typeof (5 == "5") is ${typeof (5 == "5")}`);
console.log(`${++i} typeof (5 === "5") is ${typeof (5 === "5")}`);

console.log(`${++i} typeof (null == undefined) is ${typeof (null == undefined)}`);
console.log(`${++i} typeof (null === undefined) is ${typeof (null === undefined)}`);


// ===============================
// SPECIAL typeof CASES
// ===============================

console.log(`${++i} typeof undeclaredVariable is ${typeof undeclaredVariable}`);

// This throws ReferenceError:
// console.log(typeof undeclaredVariable + 5);


//-------------------------------------Type Conversion--------------------------------------
console.log(`Number(undefined) ${Number(undefined)}`);
console.log(`Number(null) ${Number(null)}`);
console.log(`Number(NaN) ${Number(NaN)}`);
// console.log(`Number(Symbol()) ${Number(Symbol())}`);
console.log(`Number("") ${Number("")}`);
console.log(`Number([]) ${Number([])}`);
console.log(`Number({}) ${Number({})}`);
console.log(`Number("InvexTech") ${Number("InvexTech")}`);

console.log(`String(undefined) ${String(undefined)}`);
console.log(`String(null) ${String(null)}`);
console.log(`String([]) ${String([])}`);
console.log(`String({}) ${String({})}`);

console.log(`Boolean({}) ${Boolean({})}`);
console.log(`Boolean([]) ${Boolean([])}`);
console.log(`Boolean("") ${Boolean("")}`);
console.log(`Boolean("InvexTech") ${Boolean("InvexTech")}`);
// console.log(`Boolean(NAN) ${Boolean(NAN)}`);
console.log(`Boolean(null) ${Boolean(null)}`);
console.log(`Boolean(undefined) ${Boolean(undefined)}`);
console.log(`Boolean(1) ${Boolean(1)}`);
console.log(`Boolean(0) ${Boolean(0)}`);


//============================Control Structures==============================

