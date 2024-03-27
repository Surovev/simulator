const palindrome = (str) => {
    let front = str.length - 1;

    for (let back = 0; front >= back; back++) {
        if (str[back].toLowerCase() !== str[front].toLowerCase()) return false;
        front--;
    }; return true;
};

// https://playcode.io/880094

console.log(palindrome('racecar'));
console.log(palindrome('table'));
