function debounce(fnc, delay) {
    let interval;
    return function (args) {
        clearTimeout(interval);
        interval = setTimeout(() => {
            fnc.apply(this, args)
        }, delay)
    }
}

let debouncedSearch =
    debounce(() => {
        console.log("searching.....");
    }, 300)


debouncedSearch();