// function moveZeros(arr) {
//   let arranged =arr.filter(val=>val!==0)
//   for(let val of arr){
//       if(val == 0) arranged.push(val)
//   }
//   return arranged
// }
​
const moveZeros =(arr)=> {
  let zeros = arr.filter(val=>val===0), nonZeros = arr.filter(val=>val !== 0)
  return [...nonZeros,...zeros]
​
}