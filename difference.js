 
//Tuesday's Kata practice
/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
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
  
