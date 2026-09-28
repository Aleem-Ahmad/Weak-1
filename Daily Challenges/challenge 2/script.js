// Find the missing number in [1,2,4,5]

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let sum = (n * (n + 1)) / 2;
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 4, 5]));