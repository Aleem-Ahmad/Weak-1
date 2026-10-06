function debounce(callback, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, delay);
    };
}

function search() {
    console.log("searching...");
}

const debouncedSearch = debounce(search, 500);


function throttle(callback, delay) {
    let play = true;

    return function () {

        if (!play) {
            return;
        }

        play = false;

        callback();

        setTimeout(() => {
            play = true;
        }, delay);
    };
}


document.getElementById("input")
    .addEventListener("input", debouncedSearch);