function minMaxLengthAverage (arr) {
    let minValue = arr[0];
    let maxValue = arr[0];
    let summ = 0;
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      summ = summ + arr[i];
      if (arr[i] < minValue) {
        minValue = arr[i];
      } if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    const averageValue = summ / (arr.length);
    newArr.push(minValue, maxValue, arr.length, averageValue);
    return newArr;
  }
  
  minMaxLengthAverage([6, 9, 15, -2, 92, 11]);
