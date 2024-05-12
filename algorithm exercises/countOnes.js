function countOnes (matrix) {
    let result = 0;
    matrix.forEach(element => {
      element.map(item => {
        result = item === 1 ? result + 1 : result;
      });
    });
    return result;
  }
