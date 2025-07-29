// function getMostFrequent(json) {
//     return json.temperature.map(val=>{
//             let frequencyMap ={};
//             for(let temp of val ){
//               frequencyMap[temp]=(frequencyMap[temp]||0)+1
//             }
//             let max = Math.max(...Object.values(frequencyMap));
//             let mostFrequent = []
//             for(let key in frequencyMap){
//               if(frequencyMap[key]=== max) mostFrequent.push(Number(key))
//           }
//         return Math.max(...mostFrequent)
//     })
// } 
​
​
function getMostFrequent(json) {
    return json.temperature.map(dayTemperatures => {
        // Count frequency of each temperature
        let frequencyMap = {};
        for (let temp of dayTemperatures) {
            frequencyMap[temp] = (frequencyMap[temp] || 0) + 1;
        }
        
        // Find the maximum frequency
        let maxFrequency = Math.max(...Object.values(frequencyMap));
        
        // Find all temperatures with maximum frequency
        let mostFrequentTemps = [];
        for (let temp in frequencyMap) {
            if (frequencyMap[temp] === maxFrequency) {
                mostFrequentTemps.push(Number(temp));
            }
        }
        
        // Return the highest temperature in case of tie
        return Math.max(...mostFrequentTemps);
    });
}