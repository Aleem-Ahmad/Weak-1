// Find the largest and smallest number without Math.max/Math.min

function findLargestSmallest(arr) {
    let maxNum = arr[0];
    let minNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    console.log("Largest number is :", maxNum);
    console.log("Smallest number is :", minNum);
}

findLargestSmallest(1, 2, 3, 4, 5);
findLargestSmallest(5, 4, 3, 2, 1);