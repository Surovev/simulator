Array.prototype.groupBy = function(callback) {
    return this.reduce((acc, item) => {
      const key = callback ? callback(item) : item;
  
      if (!acc[key]) {
        acc[key] = [];
      }
  
      acc[key].push(item);
  
      return acc;
    }, {});
  };
  
  console.log([1,2,3,2,4,1,5,1,6].groupBy())
  
  console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} ));
  