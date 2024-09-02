function mean (arr) {
    const reducer = arr.reduce((value, el) => value + el, 0);
    return Math.round((reducer / (arr.length)) * 100) / 100;
  }
