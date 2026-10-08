let myMap = (arr, fnc) => {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(fnc(arr[i]));
    }

    return res;
}

console.log(myMap([1, 2, 3], (x => x + 2)));