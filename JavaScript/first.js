/* JavaScript 
The basics
Variables: var(old ways) -> function scoped, {let, const} -> block scoped
Data types: string, number, boolean, null, undefined

Operators: arithmetic, comparison, logical
Control flow: if, else, else if, switch
Loops
for loop, while loop, do-while loop forEach, for...in, for...of
break and continue
Functions
Declarations, expressions, arrow functions
Parameters vs arguments, return values

*/

console.log("Hello JavaScript!"); // Output: Hello JavaScript!

//If else statement

let balance = 10000;    //This is how variable is declared and initialized
let withdrawal = 7000;
let pinCorrect = true;
let accountActive = true;

// Your program must decide whether the ATM should allow the withdrawal.

// Rules

// The withdrawal is allowed only when:

// The account is active.
// The PIN is correct.
// The withdrawal amount is greater than 0.
// The withdrawal must be a multiple of 500.
// The withdrawal cannot be greater than the balance.
// Daily limit is 5000.

// If the withdrawal is greater than 5000, display:

// Daily withdrawal limit exceeded

// instead of simply saying insufficient balance.

if (accountActive === true && pinCorrect === true && withdrawal > 0 && withdrawal % 500 === 0 && withdrawal <= balance) {
    if (withdrawal > 5000) {
        console.log("Daily withdrawal limit exceeded");
    } else if (withdrawal > balance) {
        console.log("Insufficient balance");
    } else {
        console.log("Withdrawal successful");
    }
}

/*
    Here Will be Early Return Statement
*/

// Function Prototype

function isPrime(num) {
    if (num <= 1) {
        return false; // Early return for numbers less than or equal to 1
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {     //num ko 2 sa num tak divide karty jao agaar koi bhi number divide ho gaya to false return kardo
            return false; // Early return if a divisor is found
        }
    }
    return true;
}

let isNumPrime = num => {
    if (num <= 1) return false;
    let i = num - 1;
    while (num > 1) {
        if (num % i === 0) { return false; }
        i--;
    }

    return true;
}

let primeTest = (num) => {
    if (num <= 1) return false;
    let i = 2;
    while (num > 1) {
        if (num / i === 0) { return false; }

        i++;
    }

    return true;

}

//Rough Draft of Recursion Function for Prime Check
// let i = 2;
// let primeCheck = (n) => {
//     if (n != i) {
//         if (n <= 1) return false;
//         if (n % i === 0) return false;
//         i++;
//         return primeCheck(n);
//     }
//     i = 2;
//     return true;

// }

// Cleaner Recursion Function for Prime Check
let primeCheck = (n, i = 2) => {

    if (n <= 1) return false;

    if (i === n) return true;

    if (n % i === 0) return false;

    return primeCheck(n, i + 1);
};

weatherAPI = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
let dekhMosam = async () => {
    let res = await fetch(weatherAPI);
    let data = await res.json();
    console.log(data.current);
}

// dekhMosam();

//self writen FetchAPI function to get weather data from open-meteo.com
// let phirSaDekhMosam = async () => {
//     let res = await fetch(weatherAPI);
//     let lamosam = await res.json();
//     console.log(lamosam);
// })

//dekh bhai jab b bahir ki duniya sa kuch lao to wait karo or js ko b karwao
// is liey function ko async bna do
// ab fetch kro API or usko res ma store kro or isk liey await lgao
//ab res json nahi ha isko jason bnao res.json kr k or isma b awiat lgao or isko data ma save karlo
//ab data tyar ha console.log kr k varify karlo 



/*================================================================================
=======================Its 1st October , the Next Day ============================
==================================================================================*/

/*
Core methods:
map, filter, reduce, find, sort, includes
push, pop, shift, unshift
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//pop
numbers.pop(); // Removes the last element from the array
//push
numbers.push(11); // Adds 11 to the end of the array
//shift
numbers.shift(); // Removes the first element from the array
//unshift
numbers.unshift(0); // Adds 0 to the beginning of the array

let chars = numbers.map((num) => {
    return num += "A";
})

let avg = numbers.reduce((n) => {
    return n / numbers.length;
})

let primes = numbers.filter((num) => {
    return primeCheck(num);
}
)
console.log(chars); // Output: ["0A", "1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A"]
console.log(avg); // Output: 5.5
console.log(primes); // Output: [2, 3, 5, 7]

// A very important concept in JavaScript is the concept of why forEach and map are different.
// forEach is used to iterate over an array and perform an action on each element, 
// but it does not return a new array. map, on the other hand, is used to 
// create a new array by applying a function to each element of the original array.

/* 
===========================Objects
*/

// Objects
// Creating and updating properties, nested objects
// Looping with for...in
// JSON basics: JSON.parse, JSON.stringify

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
}

car.color = "red"; // Adds a new property to the object
car.year = 2021; // Updates the value of an existing property
 
car.owner = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
}

console.log(car);
 // Output: whol e object with all properties including nested objects

for (let key in car) {
    console.log(key + ": " + car[key]); // Loops through the properties of the object
}

//Modern Concept being used here is Destructuring
let { make, model, year, color, owner } = car;

console.log(make, model, year, color);
 //modern concept can be used here is optional chaining to access nested properties safely
console.log(owner?.address?.city);   // Output: Anytown

//JSON basics
let carJSON = JSON.stringify(car);
console.log(carJSON); // Output: JSON string representing the object

let carObj = JSON.parse(carJSON);
console.log(carObj); // Output: Object parsed from JSON string

//copy object mannualky & using spread operator & using Object.assign
let carCopy1 = car;
let carCopy2 = { ...car , condition: "new" }; // Using spread operator
let carCopy3 = Object.assign({}, car, { condition: "used" }); // Using Object.assign

//Now It Comes to Arrays --> let that yesterday

let customers = [{ name: "abc", phone: "12344", bill: 1000 }, { name: "xyz", phone: "12344", bill: 2000 }, { name: "pqr", phone: "12344", bill: 3000 }];

//Array Methods
//push, pop, shift, unshift, includes, find, filter, map, reduce

customers.push({ name: " asad ", phone: " 12344 ", bill: 4000 }); // Adds a new customer to the end of the array
customers.unshift({ name: " zain ", phone: " 12344 ", bill: 5000 }); // Adds a new customer to the beginning of the array

//customers.pop(); // Removes the last customer from the array
//customers.shift(); // Removes the first customer from the array

customers.includes({ name: "abc", phone: "12344", bill: 1000 }); // Returns true if the customer is in the array, false otherwise

//word problem made easy ....
let nums = [1, 2, 4, 5];
let findMissingNumber = (arr) => {
    let missingNum = 0;
    //let i = arr.length - 1;
    while (true) {
        if (arr.includes(missingNum)) {
            missingNum++;
        } else {
            return missingNum;
        }
    }
}

//algorithm to find missing number in an array of numbers from 0 to n
// 1. find the length of the array and store it in a variable x
// 2. find the sum of the array elements and store it in a variable sum
// 3. find the sum of the first n natural numbers using the formula n(n+1)/2 and store it in a variable y
//othervise list li lenth ma 1 barha kar x ma store kro or 2 barha kar y ma
//  or 2no ko multiply kr k 2 sa divide kr dana ha or jo b answer ay usko sum ma store krlo
//  or phir array k elements ko add kr k sum ma sa minus kr do jo jawab mily wahi missing number ha  

let upDatedCustomers = customers.map(customer => {
    return { ...customer, bill: customer.bill + 100 }; // Adds 100 to each customer's bill
});


