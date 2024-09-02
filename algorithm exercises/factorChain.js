function factorChain (arr) {
    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] % arr[i] === 0) {
        result = result + 1;
      }
    }
    if (result === arr.length - 1) {
      return true;
    } else {
      return false;
    }
  }
