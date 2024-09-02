function factorGroup (num) {
    let result = 0;
    if (num === 1) {
      return 'odd';
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        result = result + 1;
      }
    }
    if (result % 2 === 0) {
      return 'even';
    } else return 'odd';
  }
  