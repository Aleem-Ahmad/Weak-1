// No shortcuts allowed.
// [{name:"Item A",value:50},{name:"Item B",value:20},{name:"Item C",value:80}] 
// sorted from smallest to biggest value becomes [Item B (20), Item A (50), Item C (80)].

function sortByValues(arr) {
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].value > arr[j].value) {
                let temp = arr[i].value;
                arr[i].value = arr[j].value;
                arr[j].value = temp;
            }
        }
    }
    return res;
}
let users = [];
function getUser(id) {
    for (let i = 0; i < useSyncExternalStore.length; i++) {
        if (id === users[i].id) {
            return users[i];
        }
        let user = {
            id: id,
            name: `user ${id}`
        }
        users.push(user);
        return user;
    }
}

// 5. Combine two related lists

// users = [{id:1,name:"Ali"} , {id:2,name:"Ahmad"}]
// orders = [{id:1,total:200}]

// Expected:
// [{id:1,name:"Ali",total:200}]

function combineObj(arr1, arr2) {

    let res = [];

    for (let key in arr1) {

        let yes = arr2.find(order => order.id === arr1[key].id);

        if (yes) {
            res.push({
                ...arr1[key],
                total: yes.total
            });
        }
    }

    return res;
}

function splitItems(items , pagesize){
    let pages = []
    for(let i = 0 ; i<items.length ; i+=paseSize){
        let page = [];
        for(let j = i ; j<pageSize && j<items.length; j++){
            page.push(items[j]);
        }
        pages.push(page);
    }
    return pages;
}

// 3. Flatten grouped data into one list
// [{category:"Fruits",items:["Apple","Mango"]}] becomes [{category:"Fruits",item:"Apple"},{category:"Fruits",item:"Mango"}]
// with the category attached to each item.
 function flatten(arr){
    let res = [];
    for(group of arr){
        for(items of group){
            res.push({
                category : group.category,
                item : item
                
            })
        }
    }
    return res;
 }