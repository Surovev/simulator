const list = [1, 5, 3, 7, 17, 10];


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

console.log(bubbleSort(list));

// https://playcode.io/874461
