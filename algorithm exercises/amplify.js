function amplify (num) {
    const result = [];
    for (let i = 1; i < num + 1; i++) {
      let value = i;
      if (i % 4 === 0) {
        value = i * 10;
      }
      result.push(value);
    }
    return result;
  }
  
  console.log(amplify(13));
  