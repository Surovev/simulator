const list = [1, 5, [3, {a: 7}], 17, 10];


const flatten = (items) => {
	let result = [];

	items.forEach((item) => {
	  if(Array.isArray(item)) {
		item.forEach((element) => {
			result.push(element);
		})

		result.concat(item)
	  } else {

		result.push(item)
	  }
  })
	console.log(result)
	return result;
  };

console.log(flatten(list));
