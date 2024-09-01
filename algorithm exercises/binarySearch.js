function binarySearch(list, element) {
    let start = 0;
    let end = list.length -1;

    while (start <= end) {
        center = Math.floor((start + end) / 2);
        if (list[center] === element) return center;
        if (element < list[center]) end = center - 1;
        else start = center + 1;
    };

    return -1;
};
console.log(binarySearch(list, 10))
