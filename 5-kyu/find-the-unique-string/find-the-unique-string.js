const findUniq =(arr)=>{
   let sorted = arr.map(val=>{
       let unique = [];
       for(let i of val.toLowerCase().split('').sort().join``){
           if(!unique.includes(i)){
               unique.push(i)
           }
       }
       return unique.join``
   })
   for(let element of sorted){
       if(sorted.indexOf(element)== sorted.lastIndexOf(element)){
           return arr[sorted.indexOf(element)]
       }
   }
}
​