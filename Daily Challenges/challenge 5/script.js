// Find duplicates in an array

function findDuples(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                console.log("Duple found : ", arr[i]);
            }
        }
    }
}

findDuples([1, 2, 3, 2, 4, 4, 5]);