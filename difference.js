function arrayDiff(a, b) {
  
    let unique = [];
    
    if (a.length === 0){
      return [];
    }
    
    for (let o = 0; o < a.length; o ++){
      if (b.indexOf(a[o]) === -1){
          unique.push(a[o]);
      }
      }
       for (let j = 0; j < b.length; j ++){
      if (a.indexOf(b[j]) === -1){
          unique.push(b[j]);
      }
      }
    
    return unique;
  }
  