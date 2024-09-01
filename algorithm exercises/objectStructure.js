let a = {
    b: {
      c: function () {
        a.value = 3;
      }
    }
  };
  
  a.b.c();
  
  console.log(a.value);
  
  