// 5. Combine two related lists

// users = [{id:1,name:"Ali"}]
// orders = [{id:1,total:200}]

// Expected:
// [{id:1,name:"Ali",total:200}]

function combineList(list1 , list2){
    let result = [];

    let yes = list1.find(list1.id === list2.id);
    if(yes){
        result.push({
            ...list1,
            total : list2.total
        })
    }

    return result;
}

users = [{id:1,name:"Ali"}]
orders = [{id:1,total:200}]

console.log(combineList(user , orders));
