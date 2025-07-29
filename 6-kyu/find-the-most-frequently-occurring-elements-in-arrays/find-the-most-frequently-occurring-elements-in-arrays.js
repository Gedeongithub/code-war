 
function getMostFrequent(json) {
    return json.temperature.map(val=>{
            let frequencyMap ={};
            for(let temp of val ){
              frequencyMap[temp]=(frequencyMap[temp]||0)+1
            }
            let max = Math.max(...Object.values(frequencyMap));
            let mostFrequent = []
            for(let key in frequencyMap){
              if(frequencyMap[key]=== max) mostFrequent.push(Number(key))
          }
        return Math.max(...mostFrequent)
    })
} 