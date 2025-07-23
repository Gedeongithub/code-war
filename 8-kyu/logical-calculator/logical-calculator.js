function logicalCalc(array, op){
  return array.reduce((acc,cur)=>{
    if(op==='AND') return acc&&cur;
    if(op === 'OR') return acc||cur;
    if(op==='XOR') return acc!==cur
  })
}