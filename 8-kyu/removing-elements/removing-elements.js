const removeEveryOther =arr=>{
  let arr2=[];
  for(let i =0;i< arr.length;i++){
      if(i%2 == 0){
         arr2.push(arr[i])
      }
  }
  return arr2
}