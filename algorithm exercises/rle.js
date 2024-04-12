function rle(str) {

	const regex = new RegExp("^[A-Z]+$");

	if (str.length > 0 && !regex.test(str)) {
		throw new Error('string is not valid');
	}
	let result = str[0] || '';

	let n = 1;


	for (let i = 1; i < str.length; i++) {

		if (result[result.length - 1] === str[i]) {
			n++;
		} 
		if (result[result.length - 1] !== str[i]) {
			if (n > 1) {
				result += n;
				n = 1;
			}
			result += str[i];
		}
		if (i === str.length - 1 && n > 1) {
			result += n;
		}
	}
	return result;
}

console.log(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBfBBBBBBBBBBBBB'));
