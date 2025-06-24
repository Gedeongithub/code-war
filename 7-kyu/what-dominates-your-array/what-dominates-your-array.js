 
function dominator(arr) {
  let obj = arr.reduce((acc,cur)=>{
      acc[cur]=(acc[cur]||0)+1;
      return acc
  },{})
  let objKey = Object.keys(obj)
  let denominator =objKey.filter(val=>obj[val]>arr.length/2)[0]
  return denominator !== undefined ? denominator: -1
//  return objKey.filter(val=>Number(val)>Number(arr.length/2))
 
}