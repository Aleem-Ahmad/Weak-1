function splitPages(items, pageSize) {

    const pages = [];

    for (let i = 0; i < items.length; i += pageSize) {

        let page = [];

        for (let j = i; j < i + pageSize && j < items.length; j++) {
            page.push(items[j]);
        }

        pages.push(page);
    }

    return pages;

}

const items = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20,
    21, 22, 23
];


console.log(splitPages(items, 5));