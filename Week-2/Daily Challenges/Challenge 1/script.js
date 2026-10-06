// No shortcuts allowed.
// [{name:"Item A",value:50},{name:"Item B",value:20},{name:"Item C",value:80}] 
// sorted from smallest to biggest value becomes [Item B (20), Item A (50), Item C (80)].

//Inspired by Bubble Sort Algorithm

sortByValue = (items) => {
    const len = items.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (items[i].value > items[j].value) {
                //simple swap logic NO rocket Science
                const temp = items[i];
                items[i] = items[j];
                items[j] = temp;
            }
        }
    }
    return items;
}

console.log(sortByValue([{ name: "Item A", value: 50 }, { name: "Item B", value: 20 }, { name: "Item C", value: 80 }]));