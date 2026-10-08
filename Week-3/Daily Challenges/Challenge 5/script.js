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