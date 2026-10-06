// Level 1: Warm-up

// 1. Count Even Numbers
// [12, 7, 4, 9, 10, 3, 8]
// Write a function that returns how many numbers are even.

{
    function evensCount(arr) {
        let evensCount = 0;
        arr.forEach((elem) => {
            if (elem % 2 === 0) evensCount++;
        })
        return evensCount;
    }
    function giveEvens(arr) {
        let evens = [];
        arr.filter((elem) => {
            if (elem % 2 === 0) evens.push(elem);
        })
        return evens;
    }
    let countEven = evensCount([1, 2, 3, 4, 5]);
    evenList = giveEvens([1, 2, 3, 4, 5]);
    console.log(countEven);
    console.log(evenList);
}

// 2. Sum Without reduce()

// [5, 10, 15, 20]

// Return the total sum using a loop.

{
    function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    console.log(sumArray([1, 2, 3, 4]));
}

// 3. Find the Longest String

// ["Ali", "Muhammad", "Sara", "Abdullah"]

// Return the longest string.

{
    function returnLngest(arr) {
        let longestStr = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].length > longestStr.length) {
                longestStr = arr[i];
            }
        }
        return longestStr;
    }

    console.log(returnLngest(["Ali", "Muhammad", "Sara", "Abdullah"]));
}

// 4. Count Vowels

// "javascript"

// Return the number of vowels in the string.

// Don't use regex. Humanity has survived without regex before.

{
    function countVovels(str) {
        let vovelCount = 0;
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') vovelCount++;
        }
        return vovelCount;
    }

    console.log(countVovels("aleem ahmad ghias"));
}

// Level 2: Logic

// 5. Remove Duplicates Without Set

// [2, 4, 2, 7, 4, 9, 7, 10]

// Expected:

// [2, 4, 7, 9, 10]

{
    function removeDuples(arr) {
        let cleanarr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(cleanarr.includes(arr[i]))) {
                cleanarr.push(arr[i]);
            }
        }

        return cleanarr;
    }
    console.log(removeDuples([2, 4, 2, 7, 4, 9, 7, 10]));
}
// 6. Find the Second Largest Number

// [10, 25, 7, 42, 18, 35]

// Return:

// 35

// Don't use Math.max().
{
    function secLargestNum(arr) {
        let maxNum = arr[0];
        let secLargest = -Infinity;

        for (let i = 1; i < arr.length; i++) {

            if (arr[i] > maxNum) {
                secLargest = maxNum;
                maxNum = arr[i];
            }
            else if (arr[i] > secLargest && arr[i] !== maxNum) {
                secLargest = arr[i];
            }
        }

        return secLargest;
    }
    console.log(secLargestNum([10, 25, 7, 42, 18, 35]));
}



// 7. Count Occurrences

// Given:

// ["apple", "banana", "apple", "orange", "banana", "apple"]

// Return:

// {
//     apple: 3,
//     banana: 2,
//     orange: 1
// }

// ===> solved in script3.js

// 8. Find Common Elements

// Given:

// let a = [1, 2, 3, 4, 5];
// let b = [3, 5, 7, 9];

// Return:

// [3, 5]

// Don't use filter() + includes() together.
{
    function giveCommon(arr1, arr2) {
        let arr3 = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                arr3.push(arr1[i]);
            }

        }
        return arr3;
    }
    let a = [1, 2, 3, 4, 5];
    let b = [3, 5, 7, 9];
    console.log(giveCommon(a, b));

}

// Level 3: Objects

// 9. Highest Scorer

// let students = [
//     { name: "Ali", score: 78 },
//     { name: "Sara", score: 91 },
//     { name: "Hamza", score: 84 },
//     { name: "Ayesha", score: 96 }
// ];

// Return:

// "Ayesha"

{
    function highestScorer(arr) {
        let scorerName = null;
        let highestScore = 0;
        for (let key in arr) {
            if (arr[key].score > highestScore) {
                scorerName = arr[key].name;
            }
        }
        return scorerName;
    }
    let students = [
        { name: "Ali", score: 78 },
        { name: "Sara", score: 91 },
        { name: "Hamza", score: 84 },
        { name: "Ayesha", score: 96 }
    ];
    console.log(highestScorer(students));
}

// 10. Calculate Average

// Given:

// let students = [
//     { name: "Ali", score: 80 },
//     { name: "Sara", score: 90 },
//     { name: "Hamza", score: 70 }
// ];

// Return the average score.

// Expected:

// 80

{
    function avgScore(arr) {
        let avg = 0;
        let len = arr.length;
        for (key in arr) {
            avg += arr[key].score;
        }
        return avg / len;
    }
    let students = [
        { name: "Ali", score: 80 },
        { name: "Sara", score: 90 },
        { name: "Hamza", score: 70 }
    ];
    console.log(avgScore(students));
}

// 11. Find Failed Students

// Passing score = 50.

// [
//     { name: "Ali", score: 72 },
//     { name: "Sara", score: 45 },
//     { name: "Hamza", score: 38 },
//     { name: "Ayesha", score: 91 }
// ]

// Return the names of students who failed.

{
    function failedStudent(arr) {
        let failedOnes = [];
        for (key in arr) {
            if (arr[key].score < 50) {
                failedOnes.push(arr[key].name);
            }
        }
        return failedOnes;
    }
    let students =
        [
            { name: "Ali", score: 72 },
            { name: "Sara", score: 45 },
            { name: "Hamza", score: 38 },
            { name: "Ayesha", score: 91 }
        ];
    console.log(failedStudent(students))
}

// 🔥 Level 4: Proper Brain Exercise

// 12. Missing Number

// [1, 2, 3, 5, 6, 7, 8]

// The numbers should be from 1 → 8.

// Find the missing number.

// Constraint: Don't sort the array.

{
    function missingNum(arr) {
        let x = arr.length + 1;

        let y = arr.length + 2

        let sum = (x * y) / 2;
        console.log(sum);
        let ogSum = arr.reduce((sum, elem) => {
            return sum + elem;
        }, 0);

        let missing = sum - ogSum;
        return missing;
    }
    console.log(missingNum([1, 2, 3, 5, 6, 7, 8]));
}

// 13. First Non-Repeating Character

// "swiss"

// Return:

// "w"

// Because w appears only once and is the first character with that property.
//garbar here 
{
    function findFirstMissing(str) {
        for (let i = 0; i < str.length; i++) {
            let isRepeating = false;

            for (let j = 0; j < str.length; j++) {
                if (i !== j && str[i] === str[j]) {
                    isRepeating = true;
                    break;
                }
            }

            if (!isRepeating) {
                return str[i];
            }
        }

        return null;
    }

    console.log(findFirstMissing("swisss"));
}

// 14. Move Zeros to the End

// [0, 5, 0, 3, 8, 0, 2]

// Expected:

// [5, 3, 8, 2, 0, 0, 0]

// Keep the order of the non-zero numbers.

{
    function zeroToEnd(arr) {
        let newArr = [];
        let count = 0;
        arr.forEach(elem => {
            if (!(elem === 0)) {
                newArr.push(elem);
            } else { count++ }
        })
        for (let i = 0; i < count; i++) {
            newArr.push(0);
        }
        return newArr;

    }
    console.log(zeroToEnd([0, 5, 0, 3, 8, 0, 2]));
}

// ☠️ Final Challenge
// 16. Transaction Analyzer

// Given:
// let transactions = [
//     { type: "income", amount: 5000 },
//     { type: "expense", amount: 1200 },
//     { type: "expense", amount: 800 },
//     { type: "income", amount: 3000 },
//     { type: "expense", amount: 500 }
// ];

// Write a function that returns:

// {
//     totalIncome: 8000,
//     totalExpense: 2500,
//     balance: 5500
// }

// Restrictions:

// No reduce()
// Use loops
// Don't hardcode the answer
// Function must work with different transaction arrays
//garbar
{
    function tms(arr) {
        let totalIncome = 0;
        let totalExpense = 0;
        let balance = 0;

        let res = {
            totalIncome: 0,
            totalExpense: 0,
            balance: 0
        }

        for (key in arr) {
            if (arr[key].type === "income") {
                totalIncome += arr[key].amount;
                console.log("Debugging ......");
                console.log(totalIncome);
            }

            if (arr[key].type === "expense") {
                totalExpense += arr[key].amount;
                console.log(totalExpense);
            }
        }

        res.totalIncome = totalIncome;
        res.totalExpense = totalExpense;
        res.balance = totalIncome - totalExpense;

        return res;
    }

    let transactions = [
        { type: "income", amount: 5000 },
        { type: "expense", amount: 1200 },
        { type: "expense", amount: 800 },
        { type: "income", amount: 3000 },
        { type: "expense", amount: 500 }
    ];

    console.log(tms(transactions));
}