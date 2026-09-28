// A teacher has 23 candies to split evenly among 5 students.
// Write a function that returns how many candies each student gets, and how many are left over.


function candyManager() {
    let candiesLeft = 23 % 5;
    let candiesDsributed = 23 - candiesLeft;
    let eachStudentCandyCount = candiesDsributed / 5;
    console.log("candies each student got : ", eachStudentCandyCount);
    console.log("candies Left : ", candiesLeft);
}