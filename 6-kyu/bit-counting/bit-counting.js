function countBits(n) {
  if(n==undefined) return 0;
  let obj= [...n.toString(2)]
obj =obj.reduce((acc,cur)=>{
      acc[cur]? acc[cur]++:acc[cur]=1;
      return acc
  },{})
  return +obj['1']
}