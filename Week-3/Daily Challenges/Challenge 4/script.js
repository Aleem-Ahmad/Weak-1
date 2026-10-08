// 4. Group items by a shared value
// [{name:"Ali",dept:"Sales"},{name:"Sara",dept:"Tech"}] groups into {Sales:[Ali], Tech:[Sara]}.

function groupShared(arr){
    let res = [];
    for(key in arr){
        res.push(
            {
                [arr[key].dept] : arr[key].name
            }
        )
    }
    return res;

}

console.log(groupShared([{name:"Ali",dept:"Sales"},{name:"Sara",dept:"Tech"}]))

/*
    sara kamal ha is line ka [arr[key].dept] : arr[key].name
    [arr[key].dept ka matlab huwa ma ik key bna raha hn baqi to simple ha]
*/