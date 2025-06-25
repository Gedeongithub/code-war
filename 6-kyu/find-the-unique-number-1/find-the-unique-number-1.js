const findUniq =(arr)=> {
  let obj =arr.reduce((acc,cur)=>{
    acc[cur]=(acc[cur]||0)+1
    return acc;
  },{});
  
  for(let key in obj){
  if(obj[key]<2){
      return Number(key)
  }
  }
}