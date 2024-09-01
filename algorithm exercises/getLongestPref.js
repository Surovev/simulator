function getLongestPref(strs) {
    let res = [];
  
    let i = 0;
    while (i < strs[0].length) {
        if (strs.every((str) => {
  
            return str[i] === strs[0][i];
        })) {
            res.push(strs[0][i])
        } else {
            return res.join('');
        }
        i++;
    }
  
    return res.join('');
  
  }
  
  console.log(getLongestPref(["flower", "flow", "flight"]));
  console.log(getLongestPref(["dog", "racecar", "car"]));
  