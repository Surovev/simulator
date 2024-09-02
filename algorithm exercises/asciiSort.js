function asciiSort (arr) {
    const str1 = arr[0];
    const str2 = arr[1];
    let result1 = 0;
    for (let i = 0; i < str1.length; i++) {
      result1 = result1 + str1.charCodeAt(i);
    }
    let result2 = 0;
    for (let i = 0; i < str2.length; i++) {
      result2 = result2 + str2.charCodeAt(i);
    }
    return (result1 < result2) ? str1 : str2;
  }
