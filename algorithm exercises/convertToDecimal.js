function convertToDecimal (perc) {
    const result = [];
    perc.forEach(item => {
      result.push(parseFloat(item) * 0.01);
    });
    return result;
  }
