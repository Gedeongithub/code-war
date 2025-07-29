function getMostFrequent(json) {
    return json.temperature.map(val=>{
            let obj ={};
            for(let element of val.sort((a,b)=>a-b) ){
              obj[element]=(obj[element]||0)+1
            }
              let objArray = Object.values(obj);
      console.log(objArray)
            let max = Math.max(...Object.values(obj));
            for(let key in obj){
              if(obj[key]=== max) return key
          }
    }).map(val=>Number(val))
//   return obj[max] [ 22, 20, 22, 16, 19 ]
} 