function myFunction() {

    const obj = {};
  
    return obj;
  }
  
  var A = myFunction();
  var B = new myFunction();
  
  console.log(A === B);
