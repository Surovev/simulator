function compress(list) {
    return bubbleSort(list);
}


function bubbleSort(arr) {
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    }

    return arr;
}

function swap(arr, i, j) {
    const tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
}


console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]));

