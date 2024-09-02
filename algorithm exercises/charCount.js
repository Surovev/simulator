function charCount (myChar, str) {
    var result = 0;
    for (let i = 0; i < str.length; i++) {
      result = myChar === str[i] ? result + 1 : result;
    }
    return result;
  }
  