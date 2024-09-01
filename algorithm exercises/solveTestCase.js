const { createInterface } = require("readline");

const lines = [];
createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (line) => {
  lines.push(line.toString().trim());
}).on("close", () => {
  solveTestCase(lines);
});

function solveTestCase(test) {
  const [P, V] = test[0].split(' ').map(Number);
  const [Q, M] = test[1].split(' ').map(Number);

  let s1;
  let e1;
  let s2;
  let e2;
  let res;

  if (P - V <= Q - M) {
    s1 = P - V;
    e1 = P + V;
    s2 = Q - M;
    e2 = Q + M;

  } else {
    s2 = P - V;
    e2 = P + V;
    s1 = Q - M;
    e1 = Q + M;

  }

    if (e1 >= s2) {
        if (s1 < s2 && e1 > e2) {
            res = Math.abs(s1 - e1) + 1;
        } else {
           res = Math.abs(s1 - e2) + 1;
        }
  } else {
    let p1 = Math.abs(s1 - e1) + 1;
    let p2 = Math.abs(s2 - e2) + 1;
    res = p1 + p2;
  }

  console.log((res).toString());

}

solveTestCase(['0 7','12 5']); // 25
solveTestCase(['2 3','10 3']); // 14
solveTestCase(['0 1', '0 2']); // 5
solveTestCase(['-1 12', '8 17']); // -13 + 11   -9 + 25
