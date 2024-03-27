
const list = [1, 5, 3, 7, 17, 10];


function findInsertionIndex(arr, i) {
let j = i
	for (let n = i; n >= 0; n--) {
		if (arr[n] > arr[i]) {
			j = n;
		}
	}
	return j;
}

function shiftElements(arr, insertionIndex, i) {
	const value = arr[i];
	for (i; i > insertionIndex; i--) {
        arr[i] = arr[i -1]
	}

	arr[insertionIndex] = value;
    return arr;
}

function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++ ) {
		let insertionIndex = findInsertionIndex(arr, i);
		shiftElements(arr, insertionIndex, i);
	}
	return arr;
}

 console.log(insertionSort(list));
