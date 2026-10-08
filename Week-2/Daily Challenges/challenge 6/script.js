let savedUsers = [];

function getUser(id) {

    for (let i = 0; i < savedUsers.length; i++) {

        if (id === savedUsers[i].id) {
            console.log(`Found User ${id}`);
            return savedUsers[i].name;
        }
    }

    let user = {
        id: id,
        name: `user ${id}`
    };

    savedUsers.push(user);

    return user.name;
}

console.log(getUser(5));
console.log(getUser(6));
console.log(getUser(5));