function findLargestNums (arr) {
    const result = [];
    const kek = arr.forEach(array => {
      result.push(Math.max.apply(0, array));
    });
    return result;
  }
  
  findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
  