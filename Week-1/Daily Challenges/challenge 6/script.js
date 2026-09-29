// Find what two arrays have in common, without using filter() and includes() together

function haveCommon(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[i]) {
                console.log("Arrays have common", arr[i]);
            }
        }
    }
}