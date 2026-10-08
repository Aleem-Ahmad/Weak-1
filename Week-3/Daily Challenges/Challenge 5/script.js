// 5. Make a true copy of an object
// No shortcuts like structuredClone or JSON.parse(JSON.stringify()). If you change the copy, the original should never change too.

function deepClone(obj) {
    let res = {};

    for (let key in obj) {
        if(typeof obj[key] === "object" && obj[key] !== null) {
            res[key] = deepClone(obj[key]);
        } else {
            res[key] = obj[key];
        }
    }

    return res;
}

/*
    axha bat simple hi ha 
    obj ki keys ko ik ik kar k new obj ma store krty jao 
    res[key] ka mtlab huwa key and obj[key] ka mtlab huwa value
    lekin still nested objects ka masla 
    to dekho k agar ob[key] ki type object ha to bhai recusrsive ki madad lo if else lgao
    if type is obj to chala do phir sa function or agar type object nahi to simple wali logic else ,a lga do
     
*/