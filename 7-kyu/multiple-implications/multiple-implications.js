 
const multImplication =arr => {
  if(arr.length===0)return null;
  let result = true;
  for(let i of arr){
    result =(!result||i)
  }
  return result;
}