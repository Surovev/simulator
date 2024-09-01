
function findEqualElements(arr1, arr2) {

const result = [];

let f = 0;
let s = 0;

while (f < arr1.length && s < arr2.length) {
	if (arr1[f] === arr2[s]) {
		result.push(arr1[f]);
		f++;
		s++;
	} else if (arr1[f] < arr2[s]) {
		f++;
	} else {
		s++;
	}
}

return result;
}


// Примеры
console.log(findEqualElements([1, 2, 3], [2])); // => [2]
console.log(findEqualElements([2], [1, 2, 3])); // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])); // => [2, 2]
console.log(findEqualElements([2, 2, 2, 2], [1, 2, 2, 3])); // => [2, 2]
