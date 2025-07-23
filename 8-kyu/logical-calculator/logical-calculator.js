function logicalCalc(array, op){
  let result = array[0];
  for(let val or array){
    if(op==='AND') result = result && val;
    if(op=== 'XOR') result = result !== val
    if(op === 'OR') result = result || val
  }
}