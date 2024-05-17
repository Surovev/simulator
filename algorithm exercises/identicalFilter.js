function identicalFilter (arr) {
    let counter = 0;
    const newArr = [];
    const result = arr.forEach(item => {
      counter = 0;
      for (let i = 0; i < item.length; i++) {
        if (item[i] === item[i + 1]) {
          counter = counter + 1;
        }
      }
      if (counter === item.length - 1) {
        newArr.push(item);
      }
    });
    return newArr;
  }
