const fizzBuzz = num => {
    let result = [0];

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            result.push('fizzbuzz');
        else if (i % 3 !== 0 && i % 5 === 0)
            result.push('buzz');
        else if (i % 3 === 0 && i % 5 !== 0)
            result.push('fizz');
        else
            result.push(i);
    }
    return result
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(16));
