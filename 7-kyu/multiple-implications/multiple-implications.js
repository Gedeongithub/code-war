 
function multImplication(arr) {
  if(arr.length===0)return null;
  let result = arr[0];
  for(let i of arr){
    result =(!result||i)
  }
  return result;
}