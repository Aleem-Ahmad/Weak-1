// 🔥 Next JavaScript Challenges
// 17. Count Positive, Negative & Zero
// let numbers = [4, -2, 0, 7, -5, 0, 3, -1];

// Return:

// {
//     positive: 3,
//     negative: 3,
//     zero: 2
// }

// Restriction: no filter()

{
    function countNumbers(arr) {
        let res = {
            positive: 0,
            negative: 0,
            zero: 0
        }

        arr.forEach(elem => {
            if (elem > 0) res.positive++;
            else if (elem < 0) res.negative++;
            else res.zero++;
        });
        return res;
    }

    console.log(countNumbers([4, -2, 0, 7, -5, 0, 3, -1]));
}

// 18. Find the Smallest Number
// let numbers = [45, 12, 89, 3, 27, 8];

// Expected:

// 3

// Restriction: Don't use Math.min().

{
    function smallestNum(arr) {
        let smallesrNumber = arr[0];
        arr.forEach((elem) => {
            if (elem < smallesrNumber) {
                smallesrNumber = elem;
            }
        })
        return smallesrNumber;
    }

    console.log(smallestNum([45, 12, 89, 3, 27, 8]));
    console.log(smallestNum([0, 3, 2, 4, 1, 9]));
}

// 19. Reverse an Array Without reverse()
// let arr = [10, 20, 30, 40, 50];

// Expected:

// [50, 40, 30, 20, 10]

{
    function revArr(arr) {
        let revarr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            revarr.push(arr[i]);
        }
        return revarr;
    }
    console.log(revArr([10, 20, 30, 40, 50]));
}

// 20. Count Words
// let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Return:

// {
//     apple: 3,
//     banana: 2,
//     orange: 1
// }

// Try to understand why this is different from simply counting vowels or numbers.

{
    function countWords(arr) {
        let res = {};
        arr.forEach(elem => {
            if (res[elem]) {
                res[elem]++;
            } else { res[elem] = 1; }
        })
        return res;
    }
    console.log(countWords(["apple", "banana", "apple", "orange", "banana", "apple"]));
}

// 21. Find the Most Frequent Number
// let numbers = [2, 5, 2, 8, 5, 2, 9, 5, 5];

// Expected:

// 5

// This one is sneaky. You need to count first, then determine which has the highest count.

{
    function mostFrequentNumber(arr) {
        let res = {}
        arr.forEach(elem => {
            if (res[elem]) {
                res[elem]++;
            } else { res[elem] = 1; }
        })

        let maxKey = null;
        let maxCaaount = 0;
        for (key in res) {
            if (res[key] > maxCaaount) {
                maxCaaount = res[key];
                maxKey = key;
            }
        }
        return maxKey;
    }

    console.log(mostFrequentNumber([2, 5, 2, 8, 5, 2, 9, 5, 5]));
}

// 22. Separate Even and Odd
// let numbers = [1, 4, 7, 8, 10, 13, 16];

// Return:

// {
//     even: [4, 8, 10, 16],
//     odd: [1, 7, 13]
// }

{
    function evenOdd(arr) {
        let res = {
            even: [],
            odd: []
        }

        arr.forEach(elem => {
            if (elem % 2 === 0) res.even.push(elem);
            else res.odd.push(elem);
        })
        return res;
    }
    console.log(evenOdd([1, 4, 7, 8, 10, 13, 16]));
}

// 🧠 Objects + Arrays
// 23. Find the Oldest Person
// let people = [
//     { name: "Ali", age: 22 },
//     { name: "Sara", age: 27 },
//     { name: "Hamza", age: 19 },
//     { name: "Ayesha", age: 31 }
// ];

// Expected:

// "Ayesha"

{
    function OldestPerson(people) {
        let oldestAge = 0;
        let oldestOne = null;
        for (key in people) {
            if (people[key].age > oldestAge) {
                oldestAge = people[key].age;
                oldestOne = people[key].name;
            }
        }
        return oldestOne;
    }
    let people = [
        { name: "Ali", age: 22 },
        { name: "Sara", age: 27 },
        { name: "Hamza", age: 19 },
        { name: "Ayesha", age: 31 }
    ];
    console.log(OldestPerson(people));
}

// 24. Calculate Total Cart Price
// let cart = [
//     { name: "Keyboard", price: 2500, quantity: 2 },
//     { name: "Mouse", price: 1200, quantity: 1 },
//     { name: "Headphones", price: 3000, quantity: 2 }
// ];

// Expected:

// 12200

// Formula:

// price × quantity

// for every product.

{
    function cartTotal(cart) {
        let itemTotal = 0;
        let total = 0;
        for (key in cart) {

            itemTotal = cart[key].price * cart[key].quantity;
            total += itemTotal;
        }
        return total;
    }
    let cart = [
        { name: "Keyboard", price: 2500, quantity: 2 },
        { name: "Mouse", price: 1200, quantity: 1 },
        { name: "Headphones", price: 3000, quantity: 2 }
    ];
    console.log(cartTotal(cart));
}

// 25. Find Products Above a Price
// let products = [
//     { name: "Mouse", price: 1200 },
//     { name: "Keyboard", price: 2500 },
//     { name: "Monitor", price: 25000 },
//     { name: "USB", price: 800 }
// ];

// Given:

// let limit = 2000;

// Return the products whose price is greater than limit.

{
    function highstPriceProduct(products) {
        let highPrice = 2000;
        let costlyItems = [];
        for (key in products) {
            if (products[key].price > highPrice) {
                costlyItems.push(products[key].name);
            }
        }
        return costlyItems;
    }

    let products = [
        { name: "Mouse", price: 1200 },
        { name: "Keyboard", price: 2500 },
        { name: "Monitor", price: 25000 },
        { name: "USB", price: 800 }
    ];

    console.log(highstPriceProduct(products));
}

// 27. Find Two Numbers Whose Sum Is 10
// let numbers = [2, 7, 4, 6, 3, 8, 1];

// Find a pair whose sum is 10.

// Expected:

// [2, 8]

// There may be more than one valid pair.

{
    function toNumSum10(nums) {
        let res = [];
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if ((nums[i] + nums[j]) === 10) {
                    res.push([nums[i], nums[j]]);
                }
            }
        }
        return res;
    }
    console.log(toNumSum10([2, 7, 4, 6, 3, 8, 1]));
}

// 28. Remove All Falsy Values
// let values = [
//     0,
//     "hello",
//     false,
//     42,
//     "",
//     null,
//     "JS",
//     undefined
// ];

// Expected:

// ["hello", 42, "JS"]

// Don't just memorize what falsy means. Your code should demonstrate that you understand it.

{
    function removeFalsey(arr) {
        let tures = [];
        arr.forEach(elem => {
            if (Boolean(elem)) {
                tures.push(elem);
            }
        })
        return tures;
    }
    let values = [
        0,
        "hello",
        false,
        42,
        "",
        null,
        "JS",
        undefined
    ];
    console.log(removeFalsey(values));

}

// 29. Find the Longest Word
// let sentence = "JavaScript makes web development interesting";

// Expected:

// "development"

// Restriction: don't use .sort().

{
    function longestWord(str) {
        let arrOfStr = str.split(" ");
        let maxLenWord = null;
        let maxLen = 0;
        arrOfStr.forEach(elem => {
            let elemLen = elem.length;
            if (elemLen > maxLen) {
                maxLen = elemLen;
                maxLenWord = elem;

            }
        })
        return maxLenWord;
    }
    let sentence = "JavaScript makes web development interesting";
    console.log(longestWord(sentence));
}

// ☠️ Boss Level
// 31. Student Grade Analyzer
// let students = [
//     { name: "Ali", score: 87 },
//     { name: "Sara", score: 92 },
//     { name: "Hamza", score: 61 },
//     { name: "Ayesha", score: 45 },
//     { name: "Bilal", score: 76 }
// ];

// Return:

// {
//     highest: "Sara",
//     lowest: "Ayesha",
//     average: 72.2,
//     passed: ["Ali", "Sara", "Hamza", "Bilal"],
//     failed: ["Ayesha"]
//     Rules:

// Use loops.
// Don't hardcode names.
// Passing = score >= 50.
// Calculate everything from the original array.
{

    function SGA(arr) {
        let res = {
            highest: null,
            lowest: null,
            average: 0,
            passed: [],
            failed: []
        };

        let sumScore = 0;
        let highestScore = -Infinity;
        let lowestScore = Infinity;

        for (let key in arr) {
            let student = arr[key];

            if (student.score > highestScore) {
                highestScore = student.score;
                res.highest = student.name;
            }

            if (student.score < lowestScore) {
                lowestScore = student.score;
                res.lowest = student.name;
            }

            if (student.score >= 50) {
                res.passed.push(student.name);
            } else {
                res.failed.push(student.name);
            }

            sumScore += student.score;
        }

        res.average = sumScore / arr.length;

        return res;
    }

    let students = [
        { name: "Ali", score: 87 },
        { name: "Sara", score: 92 },
        { name: "Hamza", score: 61 },
        { name: "Ayesha", score: 45 },
        { name: "Bilal", score: 76 }
    ];
    console.log(SGA(students))
}

// 🧨 32. Mini Interview Problem

// Write:

// function analyzeNumbers(numbers) {
//     // ...
// }

// For:

// [4, 7, 2, 7, 9, 2, 7, 5]

// return:

// {
//     largest: 9,
//     smallest: 2,
//     sum: 43,
//     average: 5.375,
//     unique: [4, 7, 2, 9, 5],
//     mostFrequent: 7
// }

// Restriction: Don't use Math.max(), Math.min(), Set, or reduce().

// This one combines almost everything you've been practicing.

{
    function numberAnanlyser(nums) {
        let res = {
            largest: 0,
            smallest: 0,
            sum: 0,
            average: 0,
            unique: [],
            mostFrequent: 0
        }

        let freq = {};
        let highest = 0;
        let lowest = -Infinity;
        let sum = 0;
        let mostFreqCount = 0;

        nums.forEach(elem => {
            if (elem > highest) {
                highest = elem;
                res.largest = elem
            }
            if (elem < lowest) {
                lowest = elem;
                res.smallest = elem
            }
            sum += elem;
            res.sum = sum;
            res.average = sum / nums.length;
            if (!(res.unique.includes(elem))) {
                res.unique.push(elem);
            }

            if (freq[elem]) {
                freq[elem]++;
            } else { freq[elem] = 1; }


        })
        let temp = null;
        for (key in freq) {
            if (freq[key] > mostFreqCount) {
                mostFreqCount = freq[key];
                temp = key;
            }
        }
        res.mostFrequent = temp;
        return res;
    }

    console.log(numberAnanlyser([4, 7, 2, 7, 9, 2, 7, 5]));
}

// agar mjhy ikstring sa har ik vovel ki frequency nikalni ho to

{
    function countVovels(str) {
        let vovelsFreq = {};
        let vovelCount = 0;
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                vovelCount++;

                if (vovelsFreq[char]) {
                    vovelsFreq[char]++;
                } else { vovelsFreq[char] = 1; }
            }
        }
        return vovelsFreq;
    }

    console.log(countVovels("aleem ahmad ghias"));

}

//agar mjhy non repaeting characters ki frequency chahiey ho to ....

{
    function nonRepaetingChars(str) {
        let cleanerArrFreq = {}
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] === " ") {
                continue; // Discarding WhiteScpaces
            } else {
                for (let j = i + 1; j < str.length; j++) {
                    if (!(str[i] === str[j])) {
                        let char = str[i];
                        if (cleanerArrFreq[char]) {
                            cleanerArrFreq[char]++;
                        } else { cleanerArrFreq[char] = 1; }
                    }
                }
            }
        }
        return cleanerArrFreq;
    }
    console.log(nonRepaetingChars("Happy Teachers Day"));
}

function thirdLargestNum(arr) {
    let largest = -Infinity;
    let secLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            thirdLargest = secLargest;
            secLargest = largest;
            largest = arr[i];

        } else if (arr[i] > secLargest) {
            thirdLargest = secLargest;
            secLargest = arr[i];

        } else if (arr[i] > thirdLargest) {
            thirdLargest = arr[i];
        }
    }

    return thirdLargest;
}

console.log(thirdLargestNum([10, 40, 20, 50, 30]));
// 30