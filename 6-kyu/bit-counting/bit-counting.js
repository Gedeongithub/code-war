 
function countBits(n) {
  let obj= [...n.toString(2)]
obj =obj.reduce((acc,cur)=>{
      acc[cur]? acc[cur]++:acc[cur]=1;
      return acc
  },{})
  return obj['1']
}