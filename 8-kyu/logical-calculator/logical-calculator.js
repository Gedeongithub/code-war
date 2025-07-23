const logicalCalc=(array, op)=>{
  let result = array[0];
  for(let val of array.slice(1)){
    if(op==='AND') result = result && val;
    if(op=== 'XOR') result = result !== val
    if(op === 'OR') result = result || val
  }
  return result
}