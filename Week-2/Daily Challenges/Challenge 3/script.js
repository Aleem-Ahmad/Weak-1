// 3. Flatten grouped data into one list
// [{category:"Fruits",items:["Apple","Mango"]}] becomes [{category:"Fruits",item:"Apple"},{category:"Fruits",item:"Mango"}]
// with the category attached to each item.

//list is array of groups so list.items does not exist thaats why below code is incoreect

// function flattendata(list){
//     let result = [];
//     let n = list.items.length;
//     for(let i=0 ; i<n ;i++){
//         result.push({
//             category : list.category,
//             item : list.items[i]
//         })
//     }
// }


//for of loop
function flattendata(list) {

    let result = [];

    // Loop through each category
    for (let group of list) {

        // Loop through items inside that category
        for (let item of group.items) {

            result.push({
                category: group.category,
                item: item
            });

        }
    }

    return result;
}