

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
function take<T>(list: T[], num: number = 1): T[] {
  if (!Array.isArray(list)) {
    throw new ValidationError('bad value');
  }
  if (typeof num !== 'number') {
    throw new ValidationError('bad value');
  }
    list.forEach((item) => {
      if (Array.isArray(item)) {
        throw new ValidationError('bad value');
      }
    })

    if (num === 1) {
      return [list[0]];
    }
    if (num === 0) {
      return [];
    }
     else {
      return list.slice(0, num);
     }
    
}

// console.log(take([1, 2, 3])); // => [1] 
// console.log(take([1, 2, 3], 2)); // => [1, 2] 
// console.log(take([1, 2, 3], 5)); // => [1, 2, 3] 
console.log(take([1, 2, 3], 0)); // => []



//console.log(take([123, [1, 2, 3], [1, 2, 3], [1, 2, 3]]));

const testErrCase1 = [123, [1, 2, 3], [1, 2, 3], [1, 2, 3]]
const testErrCase2 = [1, [1], '1', true]

for (let i = 0; i<4; i++) {
  try {
    take(testErrCase1[i], testErrCase2[i])
  }
  catch(err) {
    console.log(err.toString()) // ValidationError: bad value
  }
 }
