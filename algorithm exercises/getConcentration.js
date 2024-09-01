function getConcentration(arr) {
    let result = [];
    arr.forEach((item, i) => {
        result[i] = arr[i];
        result[i + arr.length] = arr[i];
    })
  
    return result;
  }
  
  // console.log(getConcentration([1, 2, 3, 4]));
  
  // console.log(getConcentration([1, 2, 3, 4, 5, 7]));
  
  