function getMostFrequent(json) {
    return json.temperature.map(val=>{
            let obj ={};
            for(let element of val.sort((a,b)=>a-b) ){
              obj[element]=(obj[element]||0)+1
            }
              let objArray = Object.values(obj).sort((a,b)=>b-a);
//       console.log(objArray)
            let max = Math.max(...objArray);
            for(let key in obj){
              if(obj[key]=== max) return key
          }
    }).map(val=>Number(val))
//   return obj[max] [ 22, 20, 22, 16, 19 ]
} 