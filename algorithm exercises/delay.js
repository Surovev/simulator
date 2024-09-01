Function.prototype.delay = function(ms) {

    let func = this;
  
    return function(...args) {
        
        setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
  };
  
  function fireAlert() {
    alert("alert!");
  }
  
  fireAlert.delay(300)();
