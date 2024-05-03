function percentDiff (num1, num2) {
    if (num1 > num2) {
      return Math.round(((num1 - num2) / ((num1 + num2) / 2) * 100) * 10) / 10;
    } else {
      return Math.round(((num2 - num1) / ((num2 + num1) / 2) * 100) * 10) / 10;
    }
  }
  