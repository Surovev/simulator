  let a = new Promise((resolve, reject) => {
    let b = 0; 
    resolve(b);
  }).then((value) => {
    console.log("First then:", value);
    throw new Error("ошибка");
  }).then((value) => {
    console.log("Second then:", value);
  }).catch((error) => {
    console.log("Caught in catch:", error.message);
    throw error;
  }).then(() => {
    console.log("This will not run if error is thrown above.");
  }).catch((error) => {
    console.log("Caught again:", error.message);
  }).finally(() => {
    console.log(a);
  });
