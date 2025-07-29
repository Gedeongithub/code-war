function getMostFrequent(json) {
return json.map(val=>{
      let obj ={};
  for(let element of val ){
      obj[element]=(obj[element]||0)+1
  }
  let max = Math.max(...Object.values(obj));
  for(let key in obj){
      if(obj[key]=== max) return key
  }
}).map(val=>Number(val))
//   return obj[max]
} 