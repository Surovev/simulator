function minMax (arr) {
    let minValue = arr[0];
    let maxValue = arr[0];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (minValue > arr[i]) {
        minValue = arr[i];
      }
      if (maxValue < arr[i]) {
        maxValue = arr[i];
      }
    }
    result.push(minValue, maxValue);
    return result;
  }
  